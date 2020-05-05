REACT NATIVE
</br>
QRCODE EXEMPLO </br>
![](https://user-images.githubusercontent.com/9003593/81031398-89ea6300-8e62-11ea-8f71-8226b76489bd.jpeg)

</br>
</br>
CÓDIGOS DE BARRA DE EXEMPLO
</br>
![](https://user-images.githubusercontent.com/9003593/81031803-e732e400-8e63-11ea-96f7-273d1d15e80c.jpeg)
</br>
![](https://user-images.githubusercontent.com/9003593/81031806-e9953e00-8e63-11ea-8aff-4ba2a5cbcf2b.jpeg)
</br>
![](https://user-images.githubusercontent.com/9003593/81031808-eb5f0180-8e63-11ea-9560-2bdd5dd143a9.jpeg)
</br>
![](https://user-images.githubusercontent.com/9003593/81031810-ec902e80-8e63-11ea-96c6-f0df54ede2c6.jpeg)
</br>
![](https://user-images.githubusercontent.com/9003593/81031812-ee59f200-8e63-11ea-905d-f1eb08ecd0fb.jpeg)
</br>
#Usando realm

import getRealm from '../services/realm'

const realm = await getRealm();
realm.write(() => {
  realm.create('Products', {id: 1, name: '...', description: 'asdasda asdasdasd'}); //cria o objeto no banco(linha)
});

useEffect(() => {
  const loadProducts = async() => {
    const realm = await getRealm();
    const data = realm.objects('Products').sorted('name', true);// list products by name
  }
  loadProducts();
}, [])

#Lista de filtros(sort, like, CONTAINS[c], ...)
https://realm.io/docs/javascript/latest/#queries

