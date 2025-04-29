export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: string;
}

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'React Native\'e Başlangıç',
    description: 'React Native\'in temellerini öğrenin ve geliştirme ortamınızı kurun.',
    content: `
# React Native'e Başlangıç

React Native, yerel mobil uygulamalar geliştirmek için kullanılan popüler bir JavaScript çerçevesidir. React'i yerel platform özellikleriyle birlikte kullanmanıza olanak tanır.

## Geliştirme Ortamınızı Kurma

React Native geliştirmeye başlamak için şunlara ihtiyacınız olacak:

1. Node.js ve npm (Node Paket Yöneticisi)
2. Bir kod editörü (VS Code gibi)
3. Expo CLI (daha kolay geliştirme için)

Node.js, JavaScript kodunu bilgisayarınızda çalıştırmanıza olanak tanıyan bir çalışma ortamıdır. npm ise JavaScript kütüphanelerini yönetmenizi sağlayan bir paket yöneticisidir. VS Code, React Native geliştirme için mükemmel bir editördür ve birçok yararlı eklentiye sahiptir.

Expo, React Native uygulamaları geliştirmeyi kolaylaştıran bir araç setidir. Karmaşık yapılandırmalar olmadan hızlıca başlamanıza olanak tanır.

## İlk Projenizi Oluşturma

Expo kullanarak yeni bir React Native projesi oluşturabilirsiniz:

\`\`\`
npx create-expo-app GuidetoReactNative
cd GuidetoReactNative
npx expo start
\`\`\`

Bu komutlar, yeni bir proje oluşturacak ve geliştirme sunucusunu başlatacaktır. Geliştirme sunucusu başladığında, uygulamanızı fiziksel bir cihazda veya emülatörde çalıştırabilirsiniz.

Expo Go uygulamasını telefonunuza indirerek, bilgisayarınızda geliştirdiğiniz uygulamayı anında telefonunuzda görebilirsiniz. Bunun için telefonunuz ve bilgisayarınız aynı Wi-Fi ağına bağlı olmalıdır.
    `,
    codeExample: `
import React from 'react';
import { Text, View } from 'react-native';

export default function MerhabaDunya() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Merhaba, dünya!</Text>
    </View>
  );
}
    `
  },
  {
    id: '2',
    title: 'Bileşenler ve Props',
    description: 'React Native uygulamalarının yapı taşlarını anlama.',
    content: `
# Bileşenler ve Props

React Native uygulamaları, bileşenler (components) kullanılarak oluşturulur. Bileşenler, ekranda görüntülenecek bir React öğesi döndüren yeniden kullanılabilir kod parçalarıdır.

## Temel Bileşenler

React Native, birkaç temel bileşen sağlar:

- View: Web geliştirmedeki div'e benzer bir kapsayıcı
- Text: Metin görüntülemek için
- Image: Görüntüleri göstermek için
- ScrollView: Kaydırılabilir bir kapsayıcı
- TextInput: Metin giriş alanları için

Bu temel bileşenler, uygulamanızın kullanıcı arayüzünü oluşturmak için kullanacağınız yapı taşlarıdır. View bileşeni, diğer bileşenleri gruplamak için kullanılır. Text bileşeni, kullanıcıya metin göstermek için kullanılır. Image bileşeni, resimleri göstermek için kullanılır. ScrollView, içeriğin ekrana sığmadığı durumlarda kaydırma özelliği ekler. TextInput, kullanıcıdan metin girişi almak için kullanılır.

## Props

Props (özellikler), verileri üst bileşenden alt bileşene aktarmak için kullanılır. Bunlar salt okunurdur ve bileşenlerinizi yeniden kullanılabilir hale getirmeye yardımcı olur.

Props, bir bileşenin davranışını veya görünümünü özelleştirmenin bir yoludur. Örneğin, bir butonun metnini veya rengini değiştirmek için props kullanabilirsiniz. Props, bileşenler arasında veri akışını sağlar ve uygulamanızın farklı parçaları arasında iletişim kurmanıza olanak tanır.

## Örnek

İşte props kullanan özel bir bileşen örneği:

\`\`\`jsx
function Selamlama(props) {
  return (
    <View>
      <Text>Merhaba, {props.isim}!</Text>
    </View>
  );
}

// Kullanım
<Selamlama isim="Ahmet" />
\`\`\`

Bu örnekte, Selamlama bileşeni bir isim prop'u alır ve bu ismi kullanarak bir selamlama mesajı oluşturur. Bu bileşeni farklı isimlerle tekrar tekrar kullanabilirsiniz, bu da kodunuzu daha modüler ve bakımı daha kolay hale getirir.
    `,
    codeExample: `
import React from 'react';
import { Text, View } from 'react-native';

function Selamlama(props) {
  return (
    <View style={{ padding: 10 }}>
      <Text>Merhaba, {props.isim}!</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Selamlama isim="Ahmet" />
      <Selamlama isim="Mehmet" />
      <Selamlama isim="Ayşe" />
    </View>
  );
}
    `
  },
  {
    id: '3',
    title: 'State ve Hooks',
    description: 'React Hooks kullanarak bileşen durumunu nasıl yöneteceğinizi öğrenin.',
    content: `
# State ve Hooks

State (durum), React bileşenlerinin kullanıcı eylemleri, ağ yanıtları ve başka herhangi bir şeye yanıt olarak zaman içinde çıktılarını değiştirmelerine olanak tanır.

## useState Hook

useState hook'u, bir bileşene durum eklemenin en yaygın yoludur:

\`\`\`jsx
import React, { useState } from 'react';

function Sayac() {
  const [sayi, setSayi] = useState(0);

  return (
    <View>
      <Text>Sayı: {sayi}</Text>
      <Button onPress={() => setSayi(sayi + 1)} title="Artır" />
    </View>
  );
}
\`\`\`

useState hook'u, bir başlangıç değeri alır ve iki öğe içeren bir dizi döndürür: mevcut durum değeri ve bu değeri güncellemek için bir fonksiyon. Bu örnekte, sayi değişkeni mevcut durumu temsil eder ve setSayi fonksiyonu bu durumu güncellemek için kullanılır.

Durum güncellendiğinde, React bileşeni yeniden render eder, böylece kullanıcı arayüzü güncel durumu yansıtır. Bu, interaktif uygulamalar oluşturmanın temelidir.

## useEffect Hook

useEffect hook'u, fonksiyon bileşenlerinde yan etkileri gerçekleştirmenize olanak tanır:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Zamanlayici() {
  const [saniye, setSaniye] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSaniye(saniye => saniye + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text>Saniye: {saniye}</Text>;
}
\`\`\`

useEffect hook'u, bileşen render edildikten sonra çalışan bir fonksiyon alır. Bu fonksiyon, API çağrıları yapmak, abonelikler oluşturmak veya DOM'u manuel olarak değiştirmek gibi yan etkileri gerçekleştirmek için kullanılabilir.

İkinci parametre olarak bir bağımlılık dizisi alır. Bu dizi boş olduğunda, etki yalnızca bileşen monte edildiğinde ve kaldırıldığında çalışır. Bağımlılık dizisinde değişkenler belirtildiğinde, etki bu değişkenler değiştiğinde yeniden çalışır.

useEffect'ten döndürülen fonksiyon, temizleme fonksiyonudur ve bileşen kaldırılmadan önce çalışır. Bu, bellek sızıntılarını önlemek için abonelikleri veya zamanlayıcıları temizlemek için kullanılır.
    `,
    codeExample: `
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Sayac() {
  const [sayi, setSayi] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sayı: {sayi}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => setSayi(sayi - 1)} title="Azalt" />
        <Button onPress={() => setSayi(sayi + 1)} title="Artır" />
      </View>
      <Button onPress={() => setSayi(0)} title="Sıfırla" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
    `
  },
  {
    id: '4',
    title: 'React Native\'de Stil Oluşturma',
    description: 'React Native bileşenlerinizi nasıl stilize edeceğinizi öğrenin.',
    content: `
# React Native'de Stil Oluşturma

React Native, stil oluşturmak için JavaScript kullanır. Bu, CSS'e benzer ancak bazı farklılıklar içerir.

## StyleSheet

StyleSheet API'si, birden çok stili tek bir yerde tanımlamak için kullanılır:

\`\`\`jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});
\`\`\`

StyleSheet.create metodu, stil nesnelerini optimize eder ve performansı artırır. Stilleri bir nesne içinde gruplamak, kodunuzu daha düzenli ve bakımı daha kolay hale getirir.

Stilleri uygulamak için, bileşenlerin style prop'unu kullanırsınız:

\`\`\`jsx
<View style={styles.container}>
  <Text style={styles.text}>Merhaba Dünya</Text>
</View>
\`\`\`

Birden fazla stili birleştirmek için bir dizi kullanabilirsiniz:

\`\`\`jsx
<Text style={[styles.text, styles.boldText]}>Kalın Metin</Text>
\`\`\`

## Flexbox Düzeni

React Native, düzen için Flexbox kullanır:

- flex: Öğelerin nasıl büyüyeceğini veya küçüleceğini tanımlar
- flexDirection: Satır (row) veya sütun (column)
- justifyContent: Ana eksen boyunca hizalama
- alignItems: Çapraz eksen boyunca hizalama

Flexbox, karmaşık düzenler oluşturmak için güçlü bir araçtır. Ana eksen, flexDirection tarafından belirlenir (varsayılan olarak column'dur, web'deki row'dan farklı olarak). justifyContent, ana eksen boyunca öğeleri hizalar (örneğin, flexDirection column olduğunda dikey olarak). alignItems, çapraz eksen boyunca öğeleri hizalar (örneğin, flexDirection column olduğunda yatay olarak).

## Stil Kalıtımı

CSS'in aksine, React Native'de sınırlı stil kalıtımı vardır. Çoğu stil, üst bileşenden alt bileşene aktarılmaz.

Bu, web geliştirmeden gelen geliştiriciler için önemli bir farktır. Örneğin, bir View bileşenine bir metin rengi uyguladığınızda, bu renk içindeki Text bileşenlerine otomatik olarak uygulanmaz. Her bileşene açıkça stil uygulamanız gerekir.

Text bileşenleri arasında bazı stil özellikleri (örneğin, fontFamily, fontSize, fontWeight) miras alınabilir, ancak View gibi diğer bileşenler arasında stil kalıtımı yoktur.
    `,
    codeExample: `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StilDemosu() {
  return (
    <View style={styles.container}>
      <View style={styles.kutu1}>
        <Text style={styles.text}>Kutu 1</Text>
      </View>
      <View style={styles.kutu2}>
        <Text style={styles.text}>Kutu 2</Text>
      </View>
      <View style={styles.kutu3}>
        <Text style={styles.text}>Kutu 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  kutu1: {
    padding: 20,
    backgroundColor: '#ff8a80',
    marginBottom: 10,
    borderRadius: 5,
  },
  kutu2: {
    padding: 20,
    backgroundColor: '#80d8ff',
    marginBottom: 10,
    borderRadius: 5,
  },
  kutu3: {
    padding: 20,
    backgroundColor: '#ccff90',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
    `
  },
  {
    id: '5',
    title: 'Navigasyon',
    description: 'React Native uygulamanızda navigasyonu nasıl uygulayacağınızı öğrenin.',
    content: `
# React Native'de Navigasyon

Navigasyon, çok ekranlı uygulamalar için gereklidir. React Navigation, React Native'de navigasyonu yönetmek için en popüler kütüphanedir.

## Kurulum

\`\`\`
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
\`\`\`

Bu komutlar, React Navigation kütüphanesini ve gerekli bağımlılıklarını projenize ekler. React Navigation, farklı navigasyon türleri için modüler bir yapıya sahiptir. Yukarıdaki komutlar, temel navigasyon paketi ve yığın (stack) navigasyonu için gerekli paketleri yükler.

## Yığın Navigasyonu (Stack Navigation)

Yığın navigasyonu, uygulamanızın ekranlar arasında geçiş yapması için bir yol sağlar; her yeni ekran bir yığının üzerine yerleştirilir.

\`\`\`jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anasayfa" component={AnasayfaEkrani} />
        <Stack.Screen name="Detaylar" component={DetaylarEkrani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
\`\`\`

NavigationContainer, tüm navigasyon yapısını saran bir bileşendir. Stack.Navigator, yığın navigasyonunu tanımlar ve içinde Stack.Screen bileşenleri ile ekranları belirtirsiniz. Her ekran için bir isim (name) ve bir bileşen (component) belirtmeniz gerekir.

## Ekranlar Arası Navigasyon

Ekranlar arasında gezinmek için:

\`\`\`jsx
function AnasayfaEkrani({ navigation }) {
  return (
    <Button
      title="Detaylara Git"
      onPress={() => navigation.navigate('Detaylar')}
    />
  );
}
\`\`\`

navigation prop'u, tüm ekran bileşenlerine otomatik olarak aktarılır. Bu prop, navigate, goBack, push gibi navigasyon işlevlerini içerir. navigate fonksiyonu, belirtilen ekrana gitmenizi sağlar. Eğer zaten o ekrandaysanız, hiçbir şey olmaz.

## Parametre Geçişi

Rotalara parametre geçebilirsiniz:

\`\`\`jsx
navigation.navigate('Detaylar', { urunId: 86 });

// Detaylar ekranında
function DetaylarEkrani({ route }) {
  const { urunId } = route.params;
  // urunId'yi kullan
}
\`\`\`

Parametreler, ekranlar arasında veri aktarmanın bir yoludur. Örneğin, bir ürün listesinden bir ürüne tıkladığınızda, ürün kimliğini detay ekranına geçirebilirsiniz. route.params nesnesi, geçirilen tüm parametreleri içerir.

Navigasyon, kullanıcı deneyiminin önemli bir parçasıdır. İyi tasarlanmış bir navigasyon yapısı, kullanıcıların uygulamanızda kolayca gezinmesini sağlar. React Navigation, bu konuda size birçok seçenek ve özelleştirme imkanı sunar.
    `,
    codeExample: `
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AnasayfaEkrani({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Ana Sayfa</Text>
      <Button
        title="Detaylara Git"
        onPress={() => navigation.navigate('Detaylar', { urunId: 42 })}
      />
    </View>
  );
}

function DetaylarEkrani({ route, navigation }) {
  const { urunId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Detaylar Sayfası</Text>
      <Text>Ürün ID: {urunId}</Text>
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anasayfa">
        <Stack.Screen name="Anasayfa" component={AnasayfaEkrani} />
        <Stack.Screen name="Detaylar" component={DetaylarEkrani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    `
  }
];
