export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'kolay' | 'orta' | 'zor';
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Kolay Sorular
  {
    id: '1',
    question: 'React Native nedir?',
    options: [
      'Sadece iOS uygulamaları geliştirmek için kullanılan bir framework',
      'Sadece Android uygulamaları geliştirmek için kullanılan bir framework',
      'JavaScript kullanarak hem iOS hem de Android için native mobil uygulamalar geliştirmeye yarayan bir framework',
      'Web uygulamaları geliştirmek için kullanılan bir framework'
    ],
    correctAnswer: 'JavaScript kullanarak hem iOS hem de Android için native mobil uygulamalar geliştirmeye yarayan bir framework',
    difficulty: 'kolay',
    explanation: 'React Native, Facebook tarafından geliştirilen, JavaScript kullanarak hem iOS hem de Android platformları için native mobil uygulamalar geliştirmenize olanak tanıyan açık kaynaklı bir framework\'tür.'
  },
  {
    id: '2',
    question: 'React Native projesi oluşturmak için hangi komut kullanılır?',
    options: [
      'npm create-react-app',
      'npx create-react-native-app',
      'npx create-expo-app',
      'npm install react-native'
    ],
    correctAnswer: 'npx create-expo-app',
    difficulty: 'kolay',
    explanation: 'Expo ile yeni bir React Native projesi oluşturmak için "npx create-expo-app ProjeAdı" komutu kullanılır. Bu, başlangıç için en kolay yoldur.'
  },
  {
    id: '3',
    question: 'React Native\'de metin göstermek için hangi bileşen kullanılır?',
    options: [
      '<div>',
      '<p>',
      '<Text>',
      '<span>'
    ],
    correctAnswer: '<Text>',
    difficulty: 'kolay',
    explanation: 'React Native\'de metin göstermek için <Text> bileşeni kullanılır. Web\'deki <p>, <span> gibi HTML etiketlerinin aksine, React Native\'de tüm metinler <Text> bileşeni içinde olmalıdır.'
  },
  
  // Orta Zorlukta Sorular
  {
    id: '4',
    question: 'React Native\'de bir bileşenin durumunu (state) yönetmek için hangi hook kullanılır?',
    options: [
      'useEffect',
      'useState',
      'useContext',
      'useReducer'
    ],
    correctAnswer: 'useState',
    difficulty: 'orta',
    explanation: 'useState hook\'u, fonksiyon bileşenlerinde durum (state) yönetimi için kullanılır. Bir başlangıç değeri alır ve güncel değer ile bu değeri güncelleyecek bir fonksiyon döndürür.'
  },
  {
    id: '5',
    question: 'Aşağıdakilerden hangisi React Native\'de stil oluşturmak için doğru bir yöntemdir?',
    options: [
      'CSS dosyaları kullanmak',
      'StyleSheet.create() metodunu kullanmak',
      'HTML style attribute kullanmak',
      'SCSS dosyaları kullanmak'
    ],
    correctAnswer: 'StyleSheet.create() metodunu kullanmak',
    difficulty: 'orta',
    explanation: 'React Native\'de stil oluşturmak için StyleSheet.create() metodu kullanılır. Bu metot, stilleri optimize eder ve performansı artırır.'
  },
  {
    id: '6',
    question: 'React Native\'de ekranlar arası geçiş için en yaygın kullanılan kütüphane hangisidir?',
    options: [
      'React Router',
      'React Navigation',
      'React Native Routes',
      'Native Navigator'
    ],
    correctAnswer: 'React Navigation',
    difficulty: 'orta',
    explanation: 'React Navigation, React Native uygulamalarında ekranlar arası geçiş (navigasyon) için en yaygın kullanılan kütüphanedir.'
  },
  
  // Zor Sorular
  {
    id: '7',
    question: 'Aşağıdaki kodun çıktısı ne olur?\n\nfunction Sayac() {\n  const [sayi, setSayi] = useState(0);\n  \n  useEffect(() => {\n    setSayi(sayi + 1);\n  }, []);\n  \n  return <Text>{sayi}</Text>;\n}',
    options: [
      '0',
      '1',
      'Sonsuz döngü oluşur',
      'Hata verir'
    ],
    correctAnswer: '1',
    difficulty: 'zor',
    explanation: 'useEffect hook\'u boş bağımlılık dizisi ([]) ile kullanıldığında, sadece bileşen monte edildiğinde çalışır. Bu durumda, sayi değeri 0\'dan 1\'e güncellenir ve ekranda 1 görüntülenir.'
  },
  {
    id: '8',
    question: 'React Native\'de FlatList bileşeni ile ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      'Tüm liste öğelerini aynı anda render eder',
      'Sadece ekranda görünen öğeleri render eder (lazy loading)',
      'Maksimum 100 öğe gösterebilir',
      'Sadece metin öğeleri gösterebilir'
    ],
    correctAnswer: 'Sadece ekranda görünen öğeleri render eder (lazy loading)',
    difficulty: 'zor',
    explanation: 'FlatList bileşeni, performans için optimize edilmiştir ve sadece ekranda görünen öğeleri render eder. Bu, "windowing" veya "lazy loading" olarak bilinir ve büyük listelerle çalışırken performansı artırır.'
  },
  {
    id: '9',
    question: 'React Native\'de bir bileşenin yaşam döngüsünü (lifecycle) yönetmek için hangi hook kombinasyonu kullanılır?',
    options: [
      'useState ve useReducer',
      'useContext ve useRef',
      'useEffect ve useLayoutEffect',
      'useMemo ve useCallback'
    ],
    correctAnswer: 'useEffect ve useLayoutEffect',
    difficulty: 'zor',
    explanation: 'useEffect hook\'u, bileşenin render edilmesinden sonra çalışır ve componentDidMount, componentDidUpdate ve componentWillUnmount yaşam döngüsü metodlarının yerine geçer. useLayoutEffect ise useEffect\'e benzer ancak DOM güncellemelerinden önce senkron olarak çalışır.'
  },
  {
    id: '10',
    question: 'React Native\'de platform özel kod yazmak için hangi API kullanılır?',
    options: [
      'Platform.select()',
      'OS.check()',
      'Device.platform()',
      'SystemInfo.get()'
    ],
    correctAnswer: 'Platform.select()',
    difficulty: 'zor',
    explanation: 'Platform.select() API\'si, farklı platformlar için farklı değerler veya bileşenler döndürmek için kullanılır. Örneğin, iOS ve Android için farklı stiller veya bileşenler tanımlayabilirsiniz.'
  }
];
