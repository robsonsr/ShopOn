import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';
import ReaderQRCode from '../../components/ReaderQRCode';
import getRealm from '../../services/realm'

import {
  AddColumn,
  BuyButton,
  BuyButtonText,
  Card,
  CardVertical,
  ColumnCard,
  Container,
  ContainerVideoDescription,
  ContentRecipe,
  DescriptionCard,
  Divider,
  Image,
  ImageCard,
  ImageCardVertical,
  LineRecipeText,
  PriceCard,
  PriceCardVertical,
  Row,
  RowToggle,
  ScrollView,
  SelectQuantity,
  SelectQuantityText,
  SubTitle,
  SubtitleRecipe,
  SubtitleRecipeText,
  Suggestions,
  Title,
  TitleCard,
  TitleCardVertical,
  TitleRecipe,
  ToggleContainer,
} from './styles';

const ProductDetails = ({ route }) => {
  const [code, setCode] = useState(route.params?.category);
  const [recipe, setRecipe] = useState([
    '1- bata o leite condensado no liquidificador até ficar bem cremoso ',
    '2 - derreta duas barras de chocolate meio amargo com meia caixinha de creme de leite no micro ondas, de 30 em 30 segundo, mexendo bem',
    '3 - misture o creme de chocolate meio amargo com o leite condensado',
    'Para o creme de chocolate cookies ‘n’ creme repita o mesmo processo',
    ' Finalizando a sobremesa',
    '4 - em uma travessa, comece intercalando os cremes de chocolate, os Hershey’s Mais(picado) e o biscoito de maisena',
    '5 - leve para geladeira e sirva bem gelado',
  ]);
  const [showDescription, setShowDescription] = useState(true);
  const [showUtilizedProducts, setShowUtilizedProducts] = useState(true);
  const [utilizedProducts, setUtilizedProducts] = useState([]);
  const [suggestsProducts, setSuggestsProducts] = useState([]);

  const recoverProductDetails = async () => {
    const realm = await getRealm();
    const filter = `category = '${code}' AND code = '0001'`;
    const filterMostFamous = `category = '${code}'`;
    const productsByCategory = realm
      .objects('Products')
      .filtered(filterMostFamous)
      .sorted('starts', true);
    const productsCategoryByCode = realm.objects('Products').filtered(filter);
    setSuggestsProducts(productsByCategory);
    setUtilizedProducts(productsCategoryByCode);

    let url = '';
    switch (code) {
      case 'comida':
        url = 'https://img.youtube.com/vi/QnzFZc9f4R4/default.jpg'
        break;
      case 'cama':
        url = 'https://images-americanas.b2w.io/produtos/01/00/img/134318/2/134318217_1GG.jpg'
        break;
      case 'smarttv':
        url = 'https://i.pinimg.com/originals/40/fa/c6/40fac6c50a38a3e5ba12f8a675ca33ad.jpg'
        break;
      default:
        url = '';
    }

    const lastIndex = realm.objects('Historical').max('id')

    productsByCategory.length && !route.params?.category && realm.write(() => {
      realm.create(
        'Historical',
        {
          id: lastIndex + 1,
          category: code,
          url: url,
          title: 'Receita Pave de chocolate',
          date: new Date().toISOString(),
        },
        'modified',
      );
    });
  };

  useEffect(() => {
    // addDatabaseProducts();
    code !== '' && recoverProductDetails();
  }, [code]);

  return code ? (
    <Container>
      {code === 'comida' && (
        <>
          <ContainerVideoDescription>
            <Title>uma dica pra voce</Title>
            <WebView
              style={{ alignSelf: 'stretch', height: 205 }}
              javaScriptEnabled
              source={{ uri: 'https://www.youtube.com/embed/QnzFZc9f4R4' }}
            />
          </ContainerVideoDescription>
          <ToggleContainer>
            <RowToggle onPress={() => setShowDescription(!showDescription)}>
              <SubTitle>receita</SubTitle>
              <Icon
                name={showDescription ? 'angle-down' : 'angle-up'}
                size={20}
                color="#666666"
              />
            </RowToggle>
            {showDescription && (
              <ContentRecipe>
                <TitleRecipe style={{ fontWeight: 'bold' }}>
                  modo de preparo
                </TitleRecipe>
                <SubtitleRecipe>
                  <SubtitleRecipeText>Para o </SubtitleRecipeText>
                  <SubtitleRecipeText style={{ fontWeight: 'bold' }}>
                    creme de chocolate meio amargo:
                  </SubtitleRecipeText>
                </SubtitleRecipe>
                {recipe.map((line) => (
                  <LineRecipeText key={line}>{line}</LineRecipeText>
                ))}
                <TitleRecipe
                  style={{
                    color: '#E60014',
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Essa receita serve até 6 porções
                </TitleRecipe>
              </ContentRecipe>
            )}
          </ToggleContainer>
        </>
      )}

      {code === 'cama' && (
        <>
          <ContainerVideoDescription>
            <Title>uma dica pra voce</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={{
                  uri:
                    'https://images-americanas.b2w.io/produtos/01/00/img/134318/2/134318217_1GG.jpg',
                }}
              />
              <Image
                source={{
                  uri:
                    'https://images-americanas.b2w.io/produtos/01/00/img/134320/0/134320051_2GG.jpg',
                }}
              />
              <Image
                source={{
                  uri:
                    'https://images-americanas.b2w.io/produtos/01/00/img/134320/0/134320051_3GG.jpg',
                }}
              />
              <Image
                source={{
                  uri:
                    'https://images-americanas.b2w.io/produtos/01/00/img/134320/0/134320051_5GG.jpg',
                }}
              />
            </ScrollView>
          </ContainerVideoDescription>
          <ToggleContainer style={{ padding: 10 }}>
            <SubTitle>
              Um cantinho acolhedor e confortável, cheio de chame para o
              descanso
            </SubTitle>
          </ToggleContainer>
          <ContentRecipe>
            <LineRecipeText>
              Quartos pequenos são, hoje, uma realidade em muitos apartamentos.
              No entanto, poucos metros quadrados não significam necessariamente
              falta de conforto ou de estilo: é possível fazer uma decoração
              bonita e de forma que todos os espaços sejam bem aproveitados,
              deixando o ambiente do jeito que você sempre sonhou.
            </LineRecipeText>
            <LineRecipeText>
              E para te ajudar nisso, separamos algumas dicas importantes para
              quem quer acertar na hora de decorar um quarto pequeno, seja ele
              de casal ou solteiro.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              1. Opte por cores claras
            </LineRecipeText>
            <LineRecipeText>
              Para as arquitetas, as cores claras ajudam a dar a sensação de
              amplitude. Entretanto, isso não significa que o ambiente deve ser
              monocromático, ou seja, sem elementos de destaque. Uma solução é
              deixar as cores e tons mais fortes para alguns dos móveis e
              objetos, como almofadas, esculturas e quadros, ou ainda eleger uma
              parede para receber cor de destaque.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              2. Traga objetos coloridos para o ambiente
            </LineRecipeText>
            <LineRecipeText>
              Assim, caso você tenha optado por cores mais neutras nas paredes e
              nos móveis, é bom ousar então nas cores dos objetos: eles trarão
              mais vida ao espaço, deixando-o com uma decoração mais marcante.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              3. Aproveite todos os espaços
            </LineRecipeText>
            <LineRecipeText>
              Ao montar o quarto, treine o olhar para ver aqueles espaços que
              comumente não seriam utilizados, mas podem se tornar ótimos
              aliados para armazenar objetos, como embaixo da cama ou os cantos
              das paredes. Outra dica é optar por móveis “2 em 1”, como um puff
              que também pode ser utilizado como um baú, por exemplo.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              4. Fique atenta à circulação
            </LineRecipeText>
            <LineRecipeText>
              Deixe as áreas de passagens sempre livres.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              5. Que tal prender abajures nas paredes ou no teto?
            </LineRecipeText>
            <LineRecipeText>
              Em quartos pequenos o ideal é usar a iluminação para dar um visual
              leve e clarear o ambiente sem que se torne um empecilho. “Instalar
              abajures e luminárias na parede ou no teto é uma alternativa para
              poupar um espaço, além de deixar o ambiente organizado, com visual
              leve, e por consequência, maior.
            </LineRecipeText>
          </ContentRecipe>
        </>
      )}

      {code === 'smarttv' && (
        <>
          <ContainerVideoDescription>
            <Title>uma dica pra voce</Title>
            <Image
              style={{ width: '100%', height: 250 }}
              source={{
                uri:
                  'https://i.pinimg.com/originals/40/fa/c6/40fac6c50a38a3e5ba12f8a675ca33ad.jpg',
              }}
            />
          </ContainerVideoDescription>
          <ToggleContainer style={{ padding: 10 }}>
            <SubTitle>Diversão com a Smart TV gamer</SubTitle>
          </ToggleContainer>
          <ContentRecipe>
            <LineRecipeText>
              Você sabia que jogar videgame ensina habilidades que o mercado de
              trabalho pede?
            </LineRecipeText>
            <LineRecipeText>
              Mais do que uma ferramenta de diversão, os videogames trazem
              vantagens profissionais para os seus jogadores e é uma ótima
              ferramenta para exercitar seu cérebro. Para se ter uma ideia, uma
              pesquisa da universidade de Denver revelou que as habilidades dos
              jogadores de videogame são 14% superiores aos não jogadores e a
              capacidade de retenção de informações é 9% maior. Foram mais de
              6,4 mil estagiários avaliados pelos pesquisadores. Videgame
              garante uma forma de aprendizado divertida. Então, chama os amigos
              e familiares.
            </LineRecipeText>
            <LineRecipeText>
              Confira algumas habilidades estimuladas ao jogar videogame,
              segundo os especialistas:
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              1. Criatividade
            </LineRecipeText>
            <LineRecipeText>
              Ao iniciar um jogo, ninguém consulta um manual para entender
              regras e jogadas. “O jogo tem uma forma lúdica de permitir ao
              jogador experimentar situações na base da tentativa e erro”, diz
              Eline Kullock, especialista em Geração Y. Essa experimentação é um
              estímulo para a criatividade, de acordo com ela.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              2. Pensamento estratégico
            </LineRecipeText>
            <LineRecipeText>
              Para passar de uma fase a outra de um game geralmente é preciso
              traçar um plano mental do que fazer. “Tem que planejar como vai
              chegar à próxima etapa, isso é planejamento estratégico”, lembra
              Eline. E, cada vez mais sofisticados, há jogos que apostam em
              desafios bem complicados e que demandam raciocínio estratégico dos
              jogadores.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              3. Agilidade
            </LineRecipeText>
            <LineRecipeText>
              A velocidade é uma característica dos tempos (e dos jogos) atuais.
              Grande parte dos videogames estimula a habilidade de resposta
              rápida a estímulos. É muito comum a rapidez ser bem recompensada
              com pontos nos jogos. “O mundo exige pessoas preparadas para a
              vida atual que tem como característica a rapidez da transmissão de
              informações por meio de tablets, smartphones, computadores. Os
              jogos fazem parte deste contexto”, diz Reinaldo Passadori, CEO do
              Instituto Passadori.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              4. Poder de concentração
            </LineRecipeText>
            <LineRecipeText>
              “Nos jogos, as pessoas precisam de um nível de concentração
              elevado”, diz Igor Cozzo, diretor de comunicação da ABTB
              (Associação Brasileira de Treinamento e Desenvolvimento). Por
              isso, um dificilmente um jogador vai tirar os olhos da tela se
              alguém o interrompe para perguntar alguma coisa. Essa capacidade
              de manter o foco é uma das regras básicas para ser mais produtivo
              durante o expediente.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              5. Foco em solução de problemas
            </LineRecipeText>
            <LineRecipeText>
              “Os jogos apresentam um objetivo claro e são pensados de forma a
              restringir o caminho mais fácil”, diz Flora Alves. Essas
              restrições para atingir a meta, segundo Flora, naturalmente levam
              o pensamento ao foco na solução de problemas.
            </LineRecipeText>
            <LineRecipeText style={{ fontWeight: 'bold', color: '#404040' }}>
              6. Capacidade de trabalho em equipe
            </LineRecipeText>
            <LineRecipeText>
              Muitos jogos são colaborativos, exigindo interação com outros
              jogadores tendo em vista o objetivo em comum a ser alcançado.
              Segundo Passadori, mais uma vantagem que o jogador garante:
              capacidade de trabalho em equipe.
            </LineRecipeText>
            <LineRecipeText>Fonte: EXAME.com.</LineRecipeText>
          </ContentRecipe>
        </>
      )}

      <ToggleContainer>
        <RowToggle
          onPress={() => setShowUtilizedProducts(!showUtilizedProducts)}
        >
          <SubTitle>produtos usados</SubTitle>
          <Icon
            name={showUtilizedProducts ? 'angle-down' : 'angle-up'}
            size={20}
            color="#666666"
          />
        </RowToggle>
        {showUtilizedProducts &&
          utilizedProducts.map((prod) => (
            <Card key={prod.id}>
              <Row>
                <ImageCard source={{ uri: prod.image_url }} />
                <ColumnCard>
                  <TitleCard>{prod.name}</TitleCard>
                  <DescriptionCard>{prod.description}</DescriptionCard>
                </ColumnCard>
                <AddColumn>
                  <PriceCard>{`R$ ${prod.price.toFixed(2)}`}</PriceCard>
                </AddColumn>
              </Row>
              <Divider />
              <Row style={{ justifyContent: 'space-between' }}>
                <SelectQuantity>
                  <SelectQuantityText>1 un.</SelectQuantityText>
                  <Icon
                    name="angle-down"
                    size={20}
                    color="#666666"
                    style={{ paddingTop: 1.5 }}
                  />
                </SelectQuantity>
                <BuyButton>
                  <BuyButtonText>comprar</BuyButtonText>
                </BuyButton>
              </Row>
            </Card>
          ))}
      </ToggleContainer>
      <Suggestions>
        <SubTitle style={{ paddingLeft: 10 }}>
          os principais produtos da categoria
        </SubTitle>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {suggestsProducts.map((rela) => (
            <CardVertical key={rela.id}>
              <ImageCardVertical source={{ uri: rela.image_url }} />
              <TitleCardVertical style={{ marginTop: 10 }}>
                {rela.name}
              </TitleCardVertical>
              <Row style={{ paddingTop: 3, paddingBottom: 3 }}>
                <Icon
                  name="star"
                  size={10}
                  color={rela.starts >= 1 ? '#F2C94C' : '#bbb'}
                />
                <Icon
                  name="star"
                  size={10}
                  color={rela.starts >= 2 ? '#F2C94C' : '#bbb'}
                />
                <Icon
                  name="star"
                  size={10}
                  color={rela.starts >= 3 ? '#F2C94C' : '#bbb'}
                />
                <Icon
                  name="star"
                  size={10}
                  color={rela.starts >= 4 ? '#F2C94C' : '#bbb'}
                />
                <Icon
                  name="star"
                  size={10}
                  color={rela.starts >= 5 ? '#F2C94C' : '#bbb'}
                />
              </Row>
              <PriceCardVertical>
                {`R$ ${rela.price.toFixed(2)}`}
              </PriceCardVertical>
            </CardVertical>
          ))}
        </ScrollView>
      </Suggestions>
    </Container>
  ) : (
      <ReaderQRCode onCodeDetected={(qrcode) => setCode(qrcode)} />
    );
};

export default ProductDetails;
