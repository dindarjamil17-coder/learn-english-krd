import { Conversation } from '../types';

export const conversations: Conversation[] = [
  // A1 Level
  {
    id: 'a1-1',
    level: 'A1',
    title: 'Meeting a New Friend',
    titleKurdish: 'دیدارکرنا هەڤالەکێ نوو',
    dialogue: [
      { speaker: 'Saman', text: 'Hello! I am Saman. What is your name?', translation: 'سڵاڤ! ئەز سامنم. ناڤێ تە چییە؟' },
      { speaker: 'Alan', text: 'Hi Saman! My name is Alan. Nice to meet you.', translation: 'سڵاڤ سامن! ناڤێ من ئالانە. ب دیتنا تە کەیفخۆشم.' },
      { speaker: 'Saman', text: 'Nice to meet you too, Alan. Where are you from?', translation: 'ئەز ژی ب دیتنا تە کەیفخۆشم، ئالان. تو ژ کیدەرێی؟' },
      { speaker: 'Alan', text: 'I am from Duhok. And you?', translation: 'ئەز ژ دهۆکێم. پا تو؟' },
      { speaker: 'Saman', text: 'I am from Zakho. How old are you?', translation: 'ئەز ژ زاخۆم. تو چەند سالی؟' },
      { speaker: 'Alan', text: 'I am 20 years old.', translation: 'ئەز ٢٠ سالم.' }
    ],
    vocabulary: [
      { word: 'Meeting', translation: 'دیدارکرن' },
      { word: 'Friend', translation: 'هەڤال' },
      { word: 'Name', translation: 'ناڤ' },
      { word: 'Nice to meet you', translation: 'کەیفخۆشم ب دیتنا تە' },
      { word: 'Where', translation: 'کیدەر' }
    ]
  },
  {
    id: 'a1-2',
    level: 'A1',
    title: 'Ordering Coffee',
    titleKurdish: 'داخوازکرنا قەهوێ',
    dialogue: [
      { speaker: 'Customer', text: 'Hello, can I have a coffee, please?', translation: 'سڵاڤ، دکارم قەهوویەکێ وەربگرم، بێ زەحمەت؟' },
      { speaker: 'Barista', text: 'Sure. Small or large?', translation: 'بێگومان. یا بچووک یان مەزن؟' },
      { speaker: 'Customer', text: 'Small, please. With milk but no sugar.', translation: 'یا بچووک، بێ زەحمەت. دگەل شیر بێ شەکر.' },
      { speaker: 'Barista', text: 'That will be 3 dollars. Anything else?', translation: 'دێ بیتە ٣ دۆلار. چو دی دڤێت؟' },
      { speaker: 'Customer', text: 'No, thank you.', translation: 'نە، سوپاس.' }
    ],
    vocabulary: [
      { word: 'Coffee', translation: 'قەهوە' },
      { word: 'Small', translation: 'بچووک' },
      { word: 'Large', translation: 'مەزن' },
      { word: 'Sugar', translation: 'شەکر' },
      { word: 'Milk', translation: 'شیر' }
    ]
  },
  {
    id: 'a1-3',
    level: 'A1',
    title: 'Asking for Directions',
    titleKurdish: 'پرسیارکرن ل پاش رێیێ',
    dialogue: [
      { speaker: 'Tourist', text: 'Excuse me, where is the market?', translation: 'بێ زەحمەت، بازاری ل کیدەرێیە؟' },
      { speaker: 'Local', text: 'Go straight and turn left. It is next to the park.', translation: 'راست هەرە و لایێ چەپێ سوور ببە. یێ ل نک پارکی.' },
      { speaker: 'Tourist', text: 'Is it far from here?', translation: 'ئەرێ یێ دوورە ژ لێرە؟' },
      { speaker: 'Local', text: 'No, only five minutes away.', translation: 'نە، بتنێ پێنج خولەکان دوورە.' },
      { speaker: 'Tourist', text: 'Thank you very much!', translation: 'زۆر سوپاس!' }
    ],
    vocabulary: [
      { word: 'Market', translation: 'بازار' },
      { word: 'Straight', translation: 'راست' },
      { word: 'Left', translation: 'چەپ' },
      { word: 'Next to', translation: 'ل نک' },
      { word: 'Far', translation: 'دوور' }
    ]
  },
  {
    id: 'a1-4',
    level: 'A1',
    title: 'Talking about Family',
    titleKurdish: 'ئاخفتن ل دۆر خێزانی',
    dialogue: [
      { speaker: 'Lana', text: 'How many brothers and sisters do you have?', translation: 'تە چەند برا و خوشک یێن هەیین؟' },
      { speaker: 'Dany', text: 'I have one brother and two sisters.', translation: 'یک برایەک و دوو خوشک یێن من هەیین.' },
      { speaker: 'Lana', text: 'Do you live with your parents?', translation: 'ئەرێ تو دگەل دایک و بابێن خۆ دژی؟' },
      { speaker: 'Dany', text: 'Yes, we live in a big house.', translation: 'بەلێ، ئەم ل مالەکا مەزن دژین.' }
    ],
    vocabulary: [
      { word: 'Family', translation: 'خێزان' },
      { word: 'Brother', translation: 'برا' },
      { word: 'Sister', translation: 'خوشک' },
      { word: 'Parents', translation: 'دایک و باب' },
      { word: 'Live', translation: 'ژیان' }
    ]
  },
  {
    id: 'a1-5',
    level: 'A1',
    title: 'The Weather Today',
    titleKurdish: 'سەقایێ ئەڤرۆ',
    dialogue: [
      { speaker: 'Karwan', text: 'Is it cold outside today?', translation: 'ئەرێ ئەڤرۆ یێ سارە ل دەرڤە؟' },
      { speaker: 'Sivan', text: 'No, it is very sunny and warm.', translation: 'نە، یێ زۆر گەرم و رۆژە.' },
      { speaker: 'Karwan', text: 'Great! Let\'s go for a walk in the garden.', translation: 'باشە! وەرە دێ چینە پیاسەکێ د باخچەی دا.' },
      { speaker: 'Sivan', text: 'That is a good idea. I will bring my sunglasses.', translation: 'هزرەکا باشە. دێ چاڤکێن خۆ یێن رۆژیێ ئینم.' }
    ],
    vocabulary: [
      { word: 'Weather', translation: 'سەقا' },
      { word: 'Cold', translation: 'سار' },
      { word: 'Sunny', translation: 'رۆژ' },
      { word: 'Warm', translation: 'گەرم' },
      { word: 'Garden', translation: 'باخچە' }
    ]
  },
  {
    id: 'a1-6',
    level: 'A1',
    title: 'Asking the Time',
    titleKurdish: 'پرسیارکرنا دەمژمێرێ',
    dialogue: [
      { speaker: 'Ali', text: 'Excuse me, what time is it now?', translation: 'بێ زەحمەت، دەمژمێر چەندە نوکە؟' },
      { speaker: 'Nisrin', text: 'It is exactly half past ten.', translation: 'درۆست دەهـ و نیڤە.' },
      { speaker: 'Ali', text: 'Oh, I have a meeting at eleven o\'clock!', translation: 'ئوو، من دیدارەک یێ ل دەژمێر یازدێ!' },
      { speaker: 'Nisrin', text: 'Don\'t worry, you have plenty of time.', translation: 'خۆ نەکەتە خەم، یێ دەمەکێ زۆر تە هەی.' }
    ],
    vocabulary: [
      { word: 'Time', translation: 'دەمژمێر / دەم' },
      { word: 'Meeting', translation: 'دیدار' },
      { word: 'Worry', translation: 'خەم' },
      { word: 'Plenty', translation: 'زۆر / گەلەک' }
    ]
  },
  {
    id: 'a1-7',
    level: 'A1',
    title: 'At the Supermarket',
    titleKurdish: 'ل سوپەرمارکێتێ',
    dialogue: [
      { speaker: 'Staff', text: 'Good morning! Can I help you find something?', translation: 'سپێدە باش! دکارم هاریکاریا تە بکەم بۆ دیتنا تشتەکی؟' },
      { speaker: 'Customer', text: 'Yes, where can I find the eggs?', translation: 'بەلێ، هێک ل کیدەرێ نە؟' },
      { speaker: 'Staff', text: 'They are in aisle four, near the bread.', translation: 'ل رێکا چارێ نە، نێزیکی نانی.' },
      { speaker: 'Customer', text: 'Thanks. How much is a bottle of water?', translation: 'سوپاس. بوتڵەکێ ئاڤێ ب چەندێیە؟' },
      { speaker: 'Staff', text: 'It is only one dollar.', translation: 'بتنێ یک دۆلارە.' }
    ],
    vocabulary: [
      { word: 'Supermarket', translation: 'سوپەرمارکێت' },
      { word: 'Eggs', translation: 'هێک' },
      { word: 'Bread', translation: 'نان' },
      { word: 'Bottle', translation: 'بوتڵ' },
      { word: 'Price', translation: 'بها / نرخ' }
    ]
  },
  {
    id: 'a1-8',
    level: 'A1',
    title: 'Favorite Hobbies',
    titleKurdish: 'ئارەزوویێن خوەشتڤی',
    dialogue: [
      { speaker: 'Renas', text: 'What do you like to do in your free time?', translation: 'تە حەز ژ چی هەیە بکەی د دەمێ بەتاڵیا خۆ دا؟' },
      { speaker: 'Tara', text: 'I love reading books and swimming.', translation: 'من حەز ژ خواندنا پەرتووکان و مەلەفانیێ هەیە.' },
      { speaker: 'Renas', text: 'That sounds fun! I prefer playing football.', translation: 'ئەفە خۆش دیارە! ئەز یارییا تەپەپێ (فۆتبۆڵێ) هەلدبژێرم.' },
      { speaker: 'Tara', text: 'Football is great too. We should play together sometime.', translation: 'تەپەپێ ژی یا خۆشە. پێتڤییە جارهەکێ ئەم پێکڤە یاری بکەین.' }
    ],
    vocabulary: [
      { word: 'Free time', translation: 'دەمێ بەتاڵیا' },
      { word: 'Reading', translation: 'خواندن' },
      { word: 'Swimming', translation: 'مەلەفانی' },
      { word: 'Football', translation: 'فۆتبۆڵ / تەپەپێ' },
      { word: 'Together', translation: 'پێکڤە' }
    ]
  },
  {
    id: 'a1-9',
    level: 'A1',
    title: 'Buying a Shirt',
    titleKurdish: 'کڕینا کراسەکی',
    dialogue: [
      { speaker: 'Shopkeeper', text: 'Can I help you choose a shirt?', translation: 'دکارم هاریکاریا تە بکەم د هەلبژارتنا کراسەکی دا؟' },
      { speaker: 'Customer', text: 'Yes, do you have this blue shirt in a medium size?', translation: 'بەلێ، ئەرێ ئەڤ کراسێ شین ب قەبارێ ناڤەندی یێ هەی؟' },
      { speaker: 'Shopkeeper', text: 'Let me check... Yes, here it is.', translation: 'بلا بچم تەماشە بکەم... بەلێ، ئەڤە یە.' },
      { speaker: 'Customer', text: 'Can I try it on?', translation: 'دکارم تاقی بکەم (ل خوە بکەم)؟' },
      { speaker: 'Shopkeeper', text: 'Of course, the fitting room is over there.', translation: 'بێگومان، ژوورا خۆ گوهۆڕینێ ل وێرێیە.' }
    ],
    vocabulary: [
      { word: 'Shirt', translation: 'کراس' },
      { word: 'Blue', translation: 'شین' },
      { word: 'Size', translation: 'قەبارە' },
      { word: 'Medium', translation: 'ناڤەندی' },
      { word: 'Check', translation: 'پشکنین' }
    ]
  },
  {
    id: 'a1-10',
    level: 'A1',
    title: 'Talking about Work',
    titleKurdish: 'بەحسکرنا کاری',
    dialogue: [
      { speaker: 'Sara', text: 'What is your job?', translation: 'کارێ تە چییە؟' },
      { speaker: 'Saman', text: 'I am a teacher. I teach English.', translation: 'ئەز مامۆستام. ئەز دەرسا ئنگلیزیێ ددەم.' },
      { speaker: 'Sara', text: 'Do you like your job?', translation: 'تە حەز ژ کارێ خۆ هەیە؟' },
      { speaker: 'Saman', text: 'Yes, I like helping students learn new things.', translation: 'بەلێ، من حەز لێ هەیە هاریکاریا قوتابیان بکەم تشتێن نوو فێرببن.' }
    ],
    vocabulary: [
      { word: 'Job', translation: 'کار' },
      { word: 'Teacher', translation: 'مامۆستا' },
      { word: 'Teach', translation: 'وانەگۆتن' },
      { word: 'Students', translation: 'قوتابی' },
      { word: 'Work', translation: 'ئیش / کار' }
    ]
  },
  {
    id: 'a1-11',
    level: 'A1',
    title: 'Buying a Gift',
    titleKurdish: 'کڕینا دیاریەکێ',
    dialogue: [
      { speaker: 'Sipan', text: 'Tomorrow is my mother\'s birthday. I want to buy her a gift.', translation: 'سوبە رۆژا ژدایکبوونا دایکا منە. ئەز دخوازیم دیاریەکێ بۆ بکڕم.' },
      { speaker: 'Gozel', text: 'How about a nice watch or a necklace?', translation: 'ئەرێ دەمژمێرەکا جوان یان تەسبیحەکا ستۆی چاوایە؟' },
      { speaker: 'Sipan', text: 'A necklace is a good idea. She loves jewelry.', translation: 'نشکێنە (تەسبیحا ستۆی) هزرەکا باشە. ئەو حەز ژ زێڕ و تشتێن جوان دکەت.' },
      { speaker: 'Gozel', text: 'Let\'s go to the jewelry store together.', translation: 'وەرە دێ پێکڤە چینە دۆکانا زێڕی.' }
    ],
    vocabulary: [
      { word: 'Gift', translation: 'دیاری' },
      { word: 'Birthday', translation: 'رۆژا ژدایکبوونێ' },
      { word: 'Necklace', translation: 'تەسبیحا ستۆی' },
      { word: 'Jewelry', translation: 'زێڕ و تشتێن جوان' },
      { word: 'Store', translation: 'دۆکان' }
    ]
  },
  {
    id: 'a1-12',
    level: 'A1',
    title: 'At the Dentist',
    titleKurdish: 'ل نک نوژدارێ ددانان',
    dialogue: [
      { speaker: 'Receptionist', text: 'Good afternoon. Do you have an appointment?', translation: 'نیڤرۆ باش. ئەرێ ژڤانەکێ تە یێ هەی؟' },
      { speaker: 'Patient', text: 'Yes, at two o\'clock. My tooth hurts very much.', translation: 'بەلێ، ل دەمژمێر دووان. ددانێ من زۆر یێ دهێشیت.' },
      { speaker: 'Receptionist', text: 'Please sit down. The doctor will see you soon.', translation: 'کەرم کە روینە خارێ. نوژدار دێ نوکە تە بینیت.' },
      { speaker: 'Patient', text: 'Thank you. I am a little nervous.', translation: 'سوپاس. ئەز هندەکێ یێ ب ترس و لەرزم.' }
    ],
    vocabulary: [
      { word: 'Dentist', translation: 'نوژدارێ ددانان' },
      { word: 'Appointment', translation: 'ژڤان' },
      { word: 'Tooth', translation: 'ددان' },
      { word: 'Hurt', translation: 'هێشان' },
      { word: 'Nervous', translation: 'ب ترس / لەرزی' }
    ]
  },
  {
    id: 'a1-13',
    level: 'A1',
    title: 'Phone Call',
    titleKurdish: 'پەیوەندیا تەلەفۆنی',
    dialogue: [
      { speaker: 'Alan', text: 'Hello, can I speak to Azad, please?', translation: 'سڵاڤ، دکارم دگەل ئازادی باخڤم، بێ زەحمەت؟' },
      { speaker: 'Miryam', text: 'Azad is not home right now. Can I take a message?', translation: 'ئازاد نوکە ل مال نینە. دکارم پەیامەکێ وەرگرم؟' },
      { speaker: 'Alan', text: 'Yes, tell him to call me back later.', translation: 'بەلێ، بێژێ بلا پاشتر تەلەفۆنا من بکەتەڤە.' },
      { speaker: 'Miryam', text: 'Sure, I will tell him. Goodbye.', translation: 'بێگومان، دێ پێ بێژم. خۆزی ل تە بن.' }
    ],
    vocabulary: [
      { word: 'Speak', translation: 'ئاخفتن' },
      { word: 'Message', translation: 'پەیام' },
      { word: 'Call back', translation: 'تەلەفۆن کرنەڤە' },
      { word: 'Later', translation: 'پاشتر' }
    ]
  },
  {
    id: 'a1-14',
    level: 'A1',
    title: 'Planning a Party',
    titleKurdish: 'پلاندانان بۆ ئاهەنگەکێ',
    dialogue: [
      { speaker: 'Nisrin', text: 'Let\'s have a party on Friday night!', translation: 'وەرە دێ ئاهەنگەکێ ل شەڤا ئەینیێ گێڕین!' },
      { speaker: 'Sherzad', text: 'That is great. Who should we invite?', translation: 'ئەفە زۆر باشە. ئەم کێ داخواز بکەین؟' },
      { speaker: 'Nisrin', text: 'All our classmates and our neighbors.', translation: 'هەمی هەڤالێن مە یێن پۆلێ و جیرانێن مە.' },
      { speaker: 'Sherzad', text: 'I will buy some snacks and juices.', translation: 'ئەز دێ هندەک سووکەخوارن و شەربەتا کڕم.' }
    ],
    vocabulary: [
      { word: 'Party', translation: 'ئاهەنگ' },
      { word: 'Invite', translation: 'داخوازکرن' },
      { word: 'Neighbors', translation: 'جیران' },
      { word: 'Snacks', translation: 'سووکەخوارن' }
    ]
  },
  {
    id: 'a1-15',
    level: 'A1',
    title: 'My Daily Life',
    titleKurdish: 'ژیانا من یا رۆژانە',
    dialogue: [
      { speaker: 'Dilshad', text: 'What time do you wake up every morning?', translation: 'تو رۆژانە دەمژمێر چەند ژ خەو رادبی؟' },
      { speaker: 'Viyan', text: 'I wake up at seven o\'clock and have breakfast.', translation: 'ئەز دەمژمێر حەفتێ ژ خەو رادبم و تێشتێ دخووم.' },
      { speaker: 'Dilshad', text: 'When do you go to work?', translation: 'کەنگی تو دچییە سەر کاری؟' },
      { speaker: 'Viyan', text: 'I leave the house at eight o\'clock by bus.', translation: 'ئەز دەمژمێر هەشتێ ژ مال دەردکەڤم ب پاسێ.' }
    ],
    vocabulary: [
      { word: 'Wake up', translation: 'ژ خەو رابوون' },
      { word: 'Breakfast', translation: 'تێشت' },
      { word: 'Leave', translation: 'دەرکەفتن / بجهـ هێلان' },
      { word: 'Bus', translation: 'پاس' }
    ]
  },
  {
    id: 'a1-16',
    level: 'A1',
    title: 'At the Park',
    titleKurdish: 'ل پارکی',
    dialogue: [
      { speaker: 'Mother', text: 'The sun is shining today. Let\'s go to the park.', translation: 'رۆژ یا زەلالە ئەڤرۆ. وەرە دێ چینە پارکی.' },
      { speaker: 'Son', text: 'Can I bring my ball to play with?', translation: 'دکارم تەپەیا خۆ بینم دگەل خوە یاری پێ بکەم؟' },
      { speaker: 'Mother', text: 'Yes, and we can have a picnic under the trees.', translation: 'بەلێ، و ئەم دشێین ل بن داران سفرەیەکێ بخۆین.' },
      { speaker: 'Son', text: 'I love playing outside!', translation: 'ئەز حەز ژ یارییا ل دەرڤە دکەم!' }
    ],
    vocabulary: [
      { word: 'Shining', translation: 'درەوشان / زەلال' },
      { word: 'Ball', translation: 'تەپە / بال' },
      { word: 'Picnic', translation: 'سفرە / گەشت' },
      { word: 'Outside', translation: 'ل دەرڤە' }
    ]
  },
  {
    id: 'a1-17',
    level: 'A1',
    title: 'Favorite Food',
    titleKurdish: 'خوارنا خوەشتڤی',
    dialogue: [
      { speaker: 'Ahmed', text: 'What is your favorite meal?', translation: 'خوارنا تە یا خوەشتڤی چییە؟' },
      { speaker: 'Leyla', text: 'I really love Dolma. It is the best!', translation: 'ئەز ب راستی حەز ژ دۆلمێ دکەم. یا هەمییان چێترە!' },
      { speaker: 'Ahmed', text: 'I like Biryani more. My mother makes it very well.', translation: 'ئەز پتر حەز ژ بڕینج و بڕیانیێ دکەم. دایکا من گەلەک ب باشی چێدکەت.' },
      { speaker: 'Leyla', text: 'Traditional food is always delicious.', translation: 'خوارنا مللی (کەلتووری) هەر دەم یا ب تامە.' }
    ],
    vocabulary: [
      { word: 'Meal', translation: 'خوارن / ژەمێ خوارنێ' },
      { word: 'Favorite', translation: 'خوەشتڤی / دلخواز' },
      { word: 'Delicious', translation: 'ب تام / خۆش' },
      { word: 'Traditional', translation: 'کەلتووری / مللی' }
    ]
  },
  {
    id: 'a1-18',
    level: 'A1',
    title: 'School Trip',
    titleKurdish: 'گەشتەکا قوتابخانێ',
    dialogue: [
      { speaker: 'Teacher', text: 'Class, we are going to the museum next Tuesday.', translation: 'پۆل، ئەم دێ سێشەمبیا بهێت چینە موزەخانەیێ.' },
      { speaker: 'Student', text: 'Will we see old statues and history?', translation: 'ئەرێ ئەم دێ کەڤنەپەیکەر و دیرۆکێ بینین؟' },
      { speaker: 'Teacher', text: 'Yes, it will be very educational.', translation: 'بەلێ، دێ گەلەک یا فێربوونێ بیت.' },
      { speaker: 'Student', text: 'I am so excited for the trip!', translation: 'ئەز گەلەک یێ ب کەیفم بۆ ڤێ گەشتێ!' }
    ],
    vocabulary: [
      { word: 'Museum', translation: 'مۆزەخانە' },
      { word: 'Statues', translation: 'پەیکەر' },
      { word: 'Educational', translation: 'پەروەردەیی / فێربوون' },
      { word: 'Excited', translation: 'ب کەیف / ب شەوق' }
    ]
  },
  {
    id: 'a1-19',
    level: 'A1',
    title: 'My Best Friend',
    titleKurdish: 'باشترین هەڤالێ من',
    dialogue: [
      { speaker: 'Zana', text: 'Who is your best friend?', translation: 'باشترین هەڤالێ تە کێیە؟' },
      { speaker: 'Renas', text: 'My best friend is Roj. We have been friends for ten years.', translation: 'باشترین هەڤالێ من رۆژە. ئەم دەهـ سالە هەڤالین.' },
      { speaker: 'Zana', text: 'What do you do together?', translation: 'هووین پێکڤە چ دکەن؟' },
      { speaker: 'Renas', text: 'We study and go to the gym together.', translation: 'ئەم پێکڤە دخوینین و دچینە وەرزشێ.' }
    ],
    vocabulary: [
      { word: 'Best friend', translation: 'باشترین هەڤال' },
      { word: 'Years', translation: 'ساڵان' },
      { word: 'Study', translation: 'خواندن / دەرس خواندن' },
      { word: 'Gym', translation: 'وەرزشخانە' }
    ]
  },
  {
    id: 'a1-20',
    level: 'A1',
    title: 'New Apartment',
    titleKurdish: 'شوقەکا نوو',
    dialogue: [
      { speaker: 'Karwan', text: 'I moved to a new apartment in the city center.', translation: 'ئەز چوومە شوقەکا نوو ل سەنتەرێ باژێڕی.' },
      { speaker: 'Sivan', text: 'Is it big or small?', translation: 'یا مەزنە یان بچووکە؟' },
      { speaker: 'Karwan', text: 'It has two bedrooms and a balcony.', translation: 'دوو ژوورێن نۆستنێ و بالکۆنەکا هەی.' },
      { speaker: 'Sivan', text: 'That sounds perfect. I want to visit you soon.', translation: 'ئەفە زۆر یا باشە. ئەز دخوازیم نوکە ژ نێزیک تە ببینم.' }
    ],
    vocabulary: [
      { word: 'Apartment', translation: 'شوقە' },
      { word: 'City center', translation: 'سەنتەرێ باژێڕی' },
      { word: 'Bedroom', translation: 'ژوورا نۆستنێ' },
      { word: 'Balcony', translation: 'بالکۆن' }
    ]
  },
  {
    id: 'a1-21',
    level: 'A1',
    title: 'At the Pharmacy',
    titleKurdish: 'ل دەرمانخانێ',
    dialogue: [
      { speaker: 'Pharmacist', text: 'How can I help you today?', translation: 'ئەڤرۆ ئەز دکارم چاوە هاریکاریا تە بکەم؟' },
      { speaker: 'Customer', text: 'I have a headache and a fever. I need some medicine.', translation: 'سەرێ من یێ دهێشیت و تەتا (تبا) من یا هەی. پێتڤی ب هندەک دەرمانانم.' },
      { speaker: 'Pharmacist', text: 'Take this pill twice a day after meals.', translation: 'ڤێ حەبکێ دوو جاران رۆژانە پشتی خوارنێ بخوە.' },
      { speaker: 'Customer', text: 'Thank you. Should I drink it with water?', translation: 'سوپاس. ئەرێ بلا دگەل ئاڤێ ب نوشم؟' }
    ],
    vocabulary: [
      { word: 'Pharmacy', translation: 'دەرمانخانە' },
      { word: 'Headache', translation: 'سەرئێش' },
      { word: 'Fever', translation: 'تەت / تا' },
      { word: 'Medicine', translation: 'دەرمان' },
      { word: 'Pill', translation: 'حەب' }
    ]
  },
  {
    id: 'a1-22',
    level: 'A1',
    title: 'Weekend Plans',
    titleKurdish: 'پلانێن دوماهیکا حەفتییێ',
    dialogue: [
      { speaker: 'Hozan', text: 'What are you doing this Saturday?', translation: 'تۆ ئەڤێ شەمبییێ دێ چ کەی؟' },
      { speaker: 'Media', text: 'I am going to visit my grandparents in the village.', translation: 'ئەز دێ چمە سەرەدانا باپیر و داپیرێن خۆ ل گوندی.' },
      { speaker: 'Hozan', text: 'That sounds peaceful. I will probably stay home and clean.', translation: 'ئەفە یا ب بێهنفەرفە دیارە. ئەز دێ ل مال مینم و مالێ پاقژ کەم.' },
      { speaker: 'Media', text: 'Cleaning is also necessary. Have a productive day!', translation: 'پاقژکرن ژی یا فەرە. ب هیوایا رۆژەکا ب مفە!' }
    ],
    vocabulary: [
      { word: 'Saturday', translation: 'شەمبی' },
      { word: 'Grandparents', translation: 'باپیر و داپیر' },
      { word: 'Village', translation: 'گوند' },
      { word: 'Necessary', translation: 'فەر / پێتڤی' }
    ]
  },
  {
    id: 'a1-23',
    level: 'A1',
    title: 'At the Library',
    titleKurdish: 'ل پەرتووکخانێ',
    dialogue: [
      { speaker: 'Librarian', text: 'Welcome. Are you looking for a specific book?', translation: 'ب خێر بێی. تو ل سەر پەرتوکەکا تایبەت دگەڕیی؟' },
      { speaker: 'Student', text: 'Yes, I need a book about Kurdish history.', translation: 'بەلێ، من پەرتوکەک ل سەر دیرۆکا کوردان دڤێت.' },
      { speaker: 'Librarian', text: 'It is on the third shelf under History.', translation: 'ل رێزا سێیێ یە ل ژێر ناڤێ دیرۆکێ.' },
      { speaker: 'Student', text: 'Can I borrow it for two weeks?', translation: 'دکارم بۆ دوو حەفتییان ب قەرز ببەم؟' }
    ],
    vocabulary: [
      { word: 'Library', translation: 'پەرتووکخانە' },
      { word: 'Specific', translation: 'تایبەت' },
      { word: 'History', translation: 'دیرۆک' },
      { word: 'Borrow', translation: 'ب قەرز برن' }
    ]
  },
  {
    id: 'a1-24',
    level: 'A1',
    title: 'Opening a Bank Account',
    titleKurdish: 'ڤەکرنا حسابەکا بانکی',
    dialogue: [
      { speaker: 'Customer', text: 'I would like to open a savings account.', translation: 'من دڤێت حسابەکا پاشکەفتنێ ڤەکەم.' },
      { speaker: 'Banker', text: 'Sure. I need your ID and proof of address.', translation: 'بێگومان. پێتڤی ب ناسنامە و ناڤۆنیشانێن تە یە.' },
      { speaker: 'Customer', text: 'Here they are. Is there a monthly fee?', translation: 'ئەڤە نە. ئەرێ رسووماتێن هەیڤانە یێن هەی؟' },
      { speaker: 'Banker', text: 'No, this account is free for students.', translation: 'نە، ئەڤ حسابە بۆ قوتابیان بێ بەرامبەرە.' }
    ],
    vocabulary: [
      { word: 'Bank', translation: 'بانک' },
      { word: 'Savings', translation: 'پاشکەفتن' },
      { word: 'ID', translation: 'ناسنامە' },
      { word: 'Fee', translation: 'کرێ / رسوومات' }
    ]
  },
  {
    id: 'a1-25',
    level: 'A1',
    title: 'At the Post Office',
    titleKurdish: 'ل پۆستەخانێ',
    dialogue: [
      { speaker: 'Staff', text: 'Next please! How can I help?', translation: 'یێ دیتر، کەرەم کە! دکارم چاوە هاریکار ببم؟' },
      { speaker: 'Man', text: 'I want to send this package to Erbil.', translation: 'من دڤێت ڤێ کارتۆنێ (ئەمانەتێ) بنێرم بۆ هەولێرێ.' },
      { speaker: 'Staff', text: 'Put it on the scale, please. It weighs two kilograms.', translation: 'بێ زەحمەت بدە سەر کێشانێ. کێشا وێ دوو کیلۆنە.' },
      { speaker: 'Man', text: 'How much does it cost to send?', translation: 'کێشانا وێ ب چەندێیە؟' }
    ],
    vocabulary: [
      { word: 'Post Office', translation: 'پۆستەخانە' },
      { word: 'Package', translation: 'ئەمانەت / پارسێل' },
      { word: 'Scale', translation: 'تەرازی / کێشان' },
      { word: 'Weight', translation: 'کێش' }
    ]
  },
  {
    id: 'a1-26',
    level: 'A1',
    title: 'Doing Laundry',
    titleKurdish: 'شیشتنا جلان',
    dialogue: [
      { speaker: 'Wife', text: 'Don\'t forget to wash your white shirts today.', translation: 'ئەڤرۆ نەهێلە کراسێن خۆ یێن سپی بشۆیی.' },
      { speaker: 'Husband', text: 'I will. Should I use the washing machine?', translation: 'دێ شۆیم. ئەرێ ب غەسەلێ (جلهەڵگرێ) بشۆیم؟' },
      { speaker: 'Wife', text: 'Yes, and use the special soap for whites.', translation: 'بەلێ، و سابوونا (تایدا) تایبەت بۆ جلان سپی بکاربینە.' },
      { speaker: 'Husband', text: 'Okay, I will hang them outside later.', translation: 'باشە، دێ پاشتر ل دەرڤە هەلاویزم.' }
    ],
    vocabulary: [
      { word: 'Laundry', translation: 'شیشتنا جلان' },
      { word: 'Wash', translation: 'شیشتن' },
      { word: 'Soap', translation: 'سابوون' },
      { word: 'Hang', translation: 'هەلاویستن' }
    ]
  },
  {
    id: 'a1-27',
    level: 'A1',
    title: 'Kitchen Chores',
    titleKurdish: 'کارێن مەتەبخێ',
    dialogue: [
      { speaker: 'Son', text: 'Mom, do you need help with the dishes?', translation: 'دایێ، هاریکاریا تە بکەم د شیشتنا قاپان دا؟' },
      { speaker: 'Mom', text: 'Yes, please dry the plates and put them away.', translation: 'بەلێ، بێ زەحمەت قاپان حشک بکە و بدە سەر جهێ وان.' },
      { speaker: 'Son', text: 'Where do the spoons go?', translation: 'کەچک دچنە کیدەرێ؟' },
      { speaker: 'Mom', text: 'In the top drawer, next to the knives.', translation: 'د چەکمەجەیا سەری دا، ل نک چەقۆیان.' }
    ],
    vocabulary: [
      { word: 'Kitchen', translation: 'مەتەبخ' },
      { word: 'Dishes', translation: 'قاپ و قاچاخ' },
      { word: 'Dry', translation: 'حشک کردن' },
      { word: 'Spoons', translation: 'کەچک' },
      { word: 'Knives', translation: 'چەقۆ' }
    ]
  },
  {
    id: 'a1-28',
    level: 'A1',
    title: 'Favorite Season',
    titleKurdish: 'وەرزی خوەشتڤی',
    dialogue: [
      { speaker: 'Azad', text: 'Which season do you like most?', translation: 'تە حەز ژ کیژان وەرزی پتر هەیە؟' },
      { speaker: 'Dilvin', text: 'I love spring because of the green grass and flowers.', translation: 'ئەز حەز ژ بهارێ دکەم ژبەر گیایێ کەسک و گولان.' },
      { speaker: 'Azad', text: 'I like autumn more. The weather is cool and the leaves change color.', translation: 'ئەز پتر حەز ژ پاییزێ دکەم. سەقا یێ فێنکە و رەنگێ بەلگێن داران دهێتە گوهۆڕین.' },
      { speaker: 'Dilvin', text: 'Every season has its own beauty.', translation: 'هەر وەرزەکی جوانیەکا تایبەت یا هەی.' }
    ],
    vocabulary: [
      { word: 'Spring', translation: 'بهار' },
      { word: 'Autumn', translation: 'پاییز' },
      { word: 'Flowers', translation: 'گولان' },
      { word: 'Leaves', translation: 'بەلگ' }
    ]
  },
  {
    id: 'a1-29',
    level: 'A1',
    title: 'Buying Shoes',
    titleKurdish: 'کڕینا پێلاڤان',
    dialogue: [
      { speaker: 'Customer', text: 'Do you have these black shoes in size 42?', translation: 'ئەرێ تە ئەڤ پێلاڤێن رەش ب قەبارێ ٤٢ یێن هەیین؟' },
      { speaker: 'Clerk', text: 'Let me look in the back. One moment please.', translation: 'بلا ل پشت لێ بگڕێم. خۆ هلیگری دەمەکێ کێم.' },
      { speaker: 'Customer', text: 'Are they comfortable for walking?', translation: 'ئەرێ بۆ پیاسێ یا ب حەسیانن؟' },
      { speaker: 'Clerk', text: 'Yes, they have a soft sole. Try them on.', translation: 'بەلێ، بنکێ وێ یێ نەرمە. تاقی بکە.' }
    ],
    vocabulary: [
      { word: 'Shoes', translation: 'پێلاڤ' },
      { word: 'Black', translation: 'رەش' },
      { word: 'Comfortable', translation: 'ب حەسیان / ئاسۆدە' },
      { word: 'Soft', translation: 'نەرم' }
    ]
  },
  {
    id: 'a1-30',
    level: 'A1',
    title: 'Getting a Haircut',
    titleKurdish: 'سەر و نینۆک چێکرن',
    dialogue: [
      { speaker: 'Barber', text: 'How do you want your hair today?', translation: 'ئەڤرۆ تو دخوازێ چەوا قژا (سەرێ) خۆ چێکەی؟' },
      { speaker: 'Customer', text: 'Short on the sides and a little long on top, please.', translation: 'لایان کورت بکە و ناڤەراستێ هندەکێ درێژ بهێلە، بێ زەحمەت.' },
      { speaker: 'Barber', text: 'Do you want a shave too?', translation: 'دخوازی رێهێن (ردێنا) خۆ ژی چێکەی؟' },
      { speaker: 'Customer', text: 'No, just the haircut. Thank you.', translation: 'نە، بتنێ سەرێ من چێکە. سوپاس.' }
    ],
    vocabulary: [
      { word: 'Haircut', translation: 'سەر چێکرن' },
      { word: 'Sides', translation: 'لای / تەنیشت' },
      { word: 'Top', translation: 'سەر / ناڤەراست' },
      { word: 'Shave', translation: 'ردێن تاشین' }
    ]
  },
  {
    id: 'a1-31',
    level: 'A1',
    title: 'At the Bus Stop',
    titleKurdish: 'ل راوەستگەها پاسێ',
    dialogue: [
      { speaker: 'Girl', text: 'Does the number 5 bus stop here?', translation: 'ئەرێ پاسا ژمارە ٥ ل ڤێرێ رادوەستیت؟' },
      { speaker: 'Old Man', text: 'Yes, it comes every twenty minutes.', translation: 'بەلێ، هەر ٢٠ خولەکان جارهەکێ دهێت.' },
      { speaker: 'Girl', text: 'I have been waiting for half an hour.', translation: 'ئەز نیڤ دەمژمێرە ل هیڤیێ مە.' },
      { speaker: 'Old Man', text: 'The traffic is very heavy today.', translation: 'هاتنوچوون ئەڤرۆ گەلەک یا قەلەبالغە.' }
    ],
    vocabulary: [
      { word: 'Stop', translation: 'راوەستگەهـ' },
      { word: 'Wait', translation: 'چاوەڕێبوون / ل هیڤیێ مان' },
      { word: 'Traffic', translation: 'هاتنوچوون / ترافیک' },
      { word: 'Heavy', translation: 'گران / قەلەبالغ' }
    ]
  },
  {
    id: 'a1-32',
    level: 'A1',
    title: 'Lost and Found',
    titleKurdish: 'تشتێن بەرزەبوویی',
    dialogue: [
      { speaker: 'Student', text: 'I lost my wallet in the cafeteria.', translation: 'بەرسیکا من (جزدانێ من) ل کافتریایێ بەرزە بوو.' },
      { speaker: 'Officer', text: 'What color is it?', translation: 'رەنگێ وێ چییە؟' },
      { speaker: 'Student', text: 'It is brown and has my ID card inside.', translation: 'یا قاوەییە و ناسناما من تێدایە.' },
      { speaker: 'Officer', text: 'Someone found it! Here you go.', translation: 'ئێکێ دیتووە! فەرموو ئەڤەیە.' }
    ],
    vocabulary: [
      { word: 'Lost', translation: 'بەرزەبوون' },
      { word: 'Wallet', translation: 'بەرسیک / جزدان' },
      { word: 'Brown', translation: 'قاوەیی' },
      { word: 'Found', translation: 'دیتن' }
    ]
  },
  {
    id: 'a1-33',
    level: 'A1',
    title: 'Introducing a Colleague',
    titleKurdish: 'ناساندنا هەڤالەکێ کاری',
    dialogue: [
      { speaker: 'Boss', text: 'Everyone, this is Ali. He is our new accountant.', translation: 'هەمی کەس، ئەڤە عەلییە. ئەو لایێ من یێ نوویە یێ ئەندازەیی (حساباتێ).' },
      { speaker: 'Team', text: 'Welcome to the team, Ali!', translation: 'ب خێر بێی بۆ ناڤ تیمێ مە، عەلی!' },
      { speaker: 'Ali', text: 'Thank you. I am happy to work with you.', translation: 'سوپاس. ئەز کەیفخۆشم دگەل هەوە کار دکەم.' },
      { speaker: 'Boss', text: 'Let\'s show him his desk.', translation: 'وەرن دێ مێزا کاری نیشا دێین.' }
    ],
    vocabulary: [
      { word: 'Colleague', translation: 'هەڤالێ کاری' },
      { word: 'Accountant', translation: 'حسابگر / ژمێریار' },
      { word: 'Team', translation: 'تیم / کۆم' },
      { word: 'Desk', translation: 'مێزا خواندنێ یان کاری' }
    ]
  },
  {
    id: 'a1-34',
    level: 'A1',
    title: 'Talking about Dreams',
    titleKurdish: 'ئاخفتن ل سەر خەونان',
    dialogue: [
      { speaker: 'Renas', text: 'What do you want to be in the future?', translation: 'تو دخوازی د پاشەرۆژێ دا ببییە چی؟' },
      { speaker: 'Zin', text: 'I want to be a famous doctor and help sick children.', translation: 'من دڤێت ببمە نوژدارەکێ بەرنیاس و هاریکاریا زارۆکێن نەخۆش بکەم.' },
      { speaker: 'Renas', text: 'That is a noble dream. I want to travel the world.', translation: 'ئەفە خەونەکا جوانە. ئەز دخوازیم ل جیهانێ بگەڕێم.' },
      { speaker: 'Zin', text: 'Traveling is also a great experience.', translation: 'گەڕیان ژی ئەزموونەکا خۆشە.' }
    ],
    vocabulary: [
      { word: 'Future', translation: 'پاشەرۆژ' },
      { word: 'Famous', translation: 'بەرنیاس' },
      { word: 'Sick', translation: 'نەخۆش' },
      { word: 'Dream', translation: 'خەون' }
    ]
  },
  {
    id: 'a1-35',
    level: 'A1',
    title: 'Our Hometown',
    titleKurdish: 'باژێڕێ مە یێ بنەرەتی',
    dialogue: [
      { speaker: 'Alan', text: 'Tell me about your hometown.', translation: 'بەحسێ باژێڕێ خۆ یێ بنەرەتی بۆ من بکە.' },
      { speaker: 'Sipan', text: 'I am from Amed. It is an old and historic city.', translation: 'ئەز خەلکێ ئامەدێ بم. باژێڕەکێ کەڤن و دیرۆکییە.' },
      { speaker: 'Alan', text: 'Is the food good there?', translation: 'ئەرێ خوارن ل وێرێ یا خۆشە؟' },
      { speaker: 'Sipan', text: 'Yes, the kebabs are the best in the world!', translation: 'بەلێ، کەبابێن وێرێ چێترین کەبابن ل جیهانێ!' }
    ],
    vocabulary: [
      { word: 'Hometown', translation: 'باژێڕێ بنەرەتی' },
      { word: 'Historic', translation: 'دیرۆکی' },
      { word: 'Food', translation: 'خوارن' },
      { word: 'Best', translation: 'چێترین / باشترین' }
    ]
  },
  {
    id: 'a1-36',
    level: 'A1',
    title: 'Music Taste',
    titleKurdish: 'حەزژێکرنا مۆزیکێ',
    dialogue: [
      { speaker: 'Leyla', text: 'Do you like listening to music?', translation: 'تە حەز ژ گۆهداریکردنا مۆزیکێ هەیە؟' },
      { speaker: 'Karwan', text: 'Yes, I listen to Kurdish folk music every day.', translation: 'بەلێ، ئەز رۆژانە گۆهدارییا مۆزیکا مللی یا کوردی دکەم.' },
      { speaker: 'Leyla', text: 'I like pop music. It makes me feel energetic.', translation: 'ئەز حەز ژ مۆزیکا پۆپ دکەم. هەستا چالاکییێ ددەتە من.' },
      { speaker: 'Karwan', text: 'Music is like medicine for the soul.', translation: 'مۆزیک وەک دەرمانە بۆ رووحێ.' }
    ],
    vocabulary: [
      { word: 'Music', translation: 'مۆزیک' },
      { word: 'Listen', translation: 'گۆهداریکردن' },
      { word: 'Folk', translation: 'مللی' },
      { word: 'Soul', translation: 'رووح' }
    ]
  },
  {
    id: 'a1-37',
    level: 'A1',
    title: 'Watching a Football Match',
    titleKurdish: 'تەماشەی یارییەکا تەپەپێ',
    dialogue: [
      { speaker: 'Dany', text: 'Which team are you supporting tonight?', translation: 'ئەڤ شەڤە پشتەڤانییا کیژان تیمێ دکەی؟' },
      { speaker: 'Roj', text: 'I am a fan of the local club. They play very well.', translation: 'ئەز هاندەرێ یانەیا مە یا لێرەمە. ئەوان گەلەک ب باشی یاری دکەن.' },
      { speaker: 'Dany', text: 'I hope they win and score many goals.', translation: 'هیوادارم ببەن و گەلەک گۆلان تومار بکەن.' },
      { speaker: 'Roj', text: 'Let\'s watch the game together at the cafe.', translation: 'وەرە دێ پێکڤە ل کافێ تەماشەی یاریێ کەین.' }
    ],
    vocabulary: [
      { word: 'Support', translation: 'پشتەڤانیکردن' },
      { word: 'Fan', translation: 'هاندەر / شەیدا' },
      { word: 'Score', translation: 'تومارکرن' },
      { word: 'Goal', translation: 'گۆل' }
    ]
  },
  {
    id: 'a1-38',
    level: 'A1',
    title: 'Adopting a Pet',
    titleKurdish: 'خودانکرنا ئاژەلەکێ مالێ',
    dialogue: [
      { speaker: 'Daughter', text: 'Dad, can we get a cat?', translation: 'بابۆ، ئەم دکارین پشیکەکێ خودان کەین؟' },
      { speaker: 'Father', text: 'A cat needs a lot of care and responsibility.', translation: 'پشیک پێتڤی ب گەلەک خزمەت و بەرپرسیاریەتیێ یە.' },
      { speaker: 'Daughter', text: 'I will feed her and clean her bed every day.', translation: 'ئەز دێ رۆژانە خوارنێ دەمێ و جهێ وێ پاقژ کەم.' },
      { speaker: 'Father', text: 'Okay, let\'s go to the shelter this weekend.', translation: 'باشە، وەرە دێ چینە جهێ خودانکرنا ئاژەلان ئەڤێ دوماهیکا حەفتیێ.' }
    ],
    vocabulary: [
      { word: 'Cat', translation: 'پشیک' },
      { word: 'Care', translation: 'خزمەت / چاڤدێری' },
      { word: 'Feed', translation: 'خوارنێ دان' },
      { word: 'Shelter', translation: 'پەناگەهـ / جهێ ئاژەلان' }
    ]
  },
  {
    id: 'a1-39',
    level: 'A1',
    title: 'At a Cooking Class',
    titleKurdish: 'ل خۆلا چێکرنا خوارنێ',
    dialogue: [
      { speaker: 'Chef', text: 'Today we are learning how to bake bread.', translation: 'ئەڤرۆ ئەم دێ فێربین چەوا نانی ل فڕنێ چێکەین.' },
      { speaker: 'Student', text: 'Is the dough ready to put in the oven?', translation: 'ئەرێ هەڤیر یێ حازرە بۆ فڕنێ؟' },
      { speaker: 'Chef', text: 'Not yet, wait for ten more minutes for it to rise.', translation: 'هێشتا نە، دەهـ خولەکێن دی ل هیڤیێ بە دا کو تێک بچیت (پف ببیت).' },
      { speaker: 'Student', text: 'It smells so good already!', translation: 'بێنا وێ زۆر یا خۆشە ژ نوکەدا!' }
    ],
    vocabulary: [
      { word: 'Chef', translation: 'خوارنچێکەر / چێشتلێنەر' },
      { word: 'Bake', translation: 'چێکرنا خوارنێ ل فڕنێ' },
      { word: 'Dough', translation: 'هەڤیر' },
      { word: 'Oven', translation: 'فڕن' }
    ]
  },
  {
    id: 'a1-40',
    level: 'A1',
    title: 'Renting a Car',
    titleKurdish: 'بدەستڤەئینانا ترۆمبێلەکێ ب کرێ',
    dialogue: [
      { speaker: 'Traveler', text: 'I want to rent a car for three days.', translation: 'من دڤێت ترۆمبێلەکێ بۆ سێ رۆژان ب کرێ بگرم.' },
      { speaker: 'Agent', text: 'We have a small sedan and a big SUV available.', translation: 'مە ترۆمبێلەکا بچووک و یا مەزن ژی یا هەی.' },
      { speaker: 'Traveler', text: 'How much is the daily rate for the small one?', translation: 'کرێیا رۆژانە یا یا بچووک ب چەندێیە؟' },
      { speaker: 'Agent', text: 'It is 40 dollars per day, including insurance.', translation: '٤٠ دۆلارن بۆ هەر رۆژەکێ، دگەل دڵنیاییێ (تەئمیناتێ).' }
    ],
    vocabulary: [
      { word: 'Rent', translation: 'کرێ / ب کرێ گرتن' },
      { word: 'Daily', translation: 'رۆژانە' },
      { word: 'Insurance', translation: 'دڵنیایی / تەئمینات' },
      { word: 'Available', translation: 'هەی / بەردەست' }
    ]
  },
  {
    id: 'a1-41',
    level: 'A1',
    title: 'At the Airport',
    titleKurdish: 'ل فرۆکەخانێ',
    dialogue: [
      { speaker: 'Officer', text: 'Passport and ticket, please.', translation: 'پاسەپۆرت و پلێت (تیکێت)، بێ زەحمەت.' },
      { speaker: 'Traveler', text: 'Here they are. Is the flight on time?', translation: 'فەرموو ئەڤەنە. ئەرێ گەشت ل دەمێ خۆدایە؟' },
      { speaker: 'Officer', text: 'Yes, it departs at 2:00 PM from Gate 7.', translation: 'بەلێ، ل دەمژمێر ٢ێ پشتی نیڤرۆ ژ دەرگەهێ ٧ێ ب رێ دکەڤیت.' },
      { speaker: 'Traveler', text: 'Thank you. Where is the waiting area?', translation: 'سوپاس. جهێ چاوەڕێبوونێ ل کیدەرێیە؟' }
    ],
    vocabulary: [
      { word: 'Passport', translation: 'پاسەپۆرت' },
      { word: 'Ticket', translation: 'پلێت / تیکێت' },
      { word: 'Flight', translation: 'گەشت' },
      { word: 'Gate', translation: 'دەرگەهـ' }
    ]
  },
  {
    id: 'a1-42',
    level: 'A1',
    title: 'Booking a Hotel',
    titleKurdish: 'حجزکرنا ئوتێلەکێ',
    dialogue: [
      { speaker: 'Reception', text: 'How many nights would you like to stay?', translation: 'تو دخوازی چەند شەڤان بمینی؟' },
      { speaker: 'Guest', text: 'Three nights, starting from tonight.', translation: 'سێ شەڤان، ل ئەڤ شەڤە دەستپێدکەت.' },
      { speaker: 'Reception', text: 'We have a single room for 50 dollars per night.', translation: 'مە ژوورەکا تاک یا هەی ب ٥٠ دۆلاران بۆ هەر شەڤەکێ.' },
      { speaker: 'Guest', text: 'That is fine. Does it include breakfast?', translation: 'باشە. ئەرێ تێشت ژی دگەلدایە؟' }
    ],
    vocabulary: [
      { word: 'Stay', translation: 'مان / مانا ل جهەکی' },
      { word: 'Single room', translation: 'ژوورا ئێک کەسی' },
      { word: 'Include', translation: 'تێدابوون' },
      { word: 'Guest', translation: 'مێڤان / خودان حجز' }
    ]
  },
  {
    id: 'a1-43',
    level: 'A1',
    title: 'Favorite Color',
    titleKurdish: 'رەنگێ خوەشتڤی',
    dialogue: [
      { speaker: 'Anna', text: 'What is your favorite color?', translation: 'رەنگێ تە یێ خوەشتڤی چییە؟' },
      { speaker: 'Mark', text: 'I really like blue because it reminds me of the sea.', translation: 'ئەز ب راستی حەز ژ رەنگێ شین دکەم چونکی دەریا دهێتە بیرا من.' },
      { speaker: 'Anna', text: 'My favorite is red. It is very bright and bold.', translation: 'یێ من رەنگێ سۆرە. یێ زۆر گەش و دیارە.' },
      { speaker: 'Mark', text: 'Yellow is also nice, like the sun.', translation: 'رەنگێ زەرد ژی یێ جوانە، وەک رۆژی.' }
    ],
    vocabulary: [
      { word: 'Color', translation: 'رەنگ' },
      { word: 'Reminds', translation: 'ب بیرهێنان' },
      { word: 'Bright', translation: 'گەش / گەرم' },
      { word: 'Bold', translation: 'دیار / بهێز' }
    ]
  },
  {
    id: 'a1-44',
    level: 'A1',
    title: 'Describing a Person',
    titleKurdish: 'وەسفکرنا کەسەکی',
    dialogue: [
      { speaker: 'Sara', text: 'Have you met the new neighbor?', translation: 'تە جیرانێ نوو دیتییە؟' },
      { speaker: 'Tom', text: 'Yes, he is tall and has short black hair.', translation: 'بەلێ، ئەو یێ درێژە و قژەکا کورت و رەش یا هەی.' },
      { speaker: 'Sara', text: 'Does he look friendly?', translation: 'ئەرێ ئەو یێ رحسڤک دیارە؟' },
      { speaker: 'Tom', text: 'Very much. He always smiles and says hello.', translation: 'گەلەک. ئەو هەر دەم دشێت و دبێژیت سڵاڤ.' }
    ],
    vocabulary: [
      { word: 'Tall', translation: 'درێژ' },
      { word: 'Short', translation: 'کورت' },
      { word: 'Friendly', translation: 'رحسڤک / هەڤالانە' },
      { word: 'Smile', translation: 'گرنژین' }
    ]
  },
  {
    id: 'a1-45',
    level: 'A1',
    title: 'Talking about Pets',
    titleKurdish: 'ئاخفتن ل سەر ئاژەلێن مالێ',
    dialogue: [
      { speaker: 'Dany', text: 'Do you have any pets at home?', translation: 'ئەرێ چو ئاژەلێن مالێ ل دەڤ تە هەنە؟' },
      { speaker: 'Lily', text: 'Yes, I have a small brown dog named Rex.', translation: 'بەلێ، من سەگیەکێ بچووک و قاوەیی یێ هەی ناڤێ وی "رێکس"ە.' },
      { speaker: 'Dany', text: 'Does he bark a lot?', translation: 'ئەرێ ئەو گەلەک دڕەویت (حەوا دکەت)؟' },
      { speaker: 'Lily', text: 'No, he is very quiet and loves to sleep.', translation: 'نە، ئەو یێ زۆر هێمنە و حەز ژ نۆستنێ دکەت.' }
    ],
    vocabulary: [
      { word: 'Pet', translation: 'ئاژەلا مالێ' },
      { word: 'Dog', translation: 'سەگ' },
      { word: 'Bark', translation: 'ڕەوین / حەوا' },
      { word: 'Quiet', translation: 'هێمن / بێدەنگ' }
    ]
  },
  {
    id: 'a1-46',
    level: 'A1',
    title: 'My Morning Routine',
    titleKurdish: 'کارێن من یێن سپێدێ',
    dialogue: [
      { speaker: 'Adam', text: 'Tell me about your morning.', translation: 'بەحسێ سپێدێیا خۆ بۆ من بکە.' },
      { speaker: 'Emma', text: 'First, I wash my face and brush my teeth.', translation: 'دەستپێکێ، ئەز دەست و چاڤێن خۆ دشۆیم و ددانێن خۆ برۆش دکەم.' },
      { speaker: 'Adam', text: 'Do you drink tea or coffee?', translation: 'تۆ چایێ د ڤەخۆی یان قەهوێ؟' },
      { speaker: 'Emma', text: 'I always drink tea with a sandwich.', translation: 'ئەز هەر دەم چایێ دگەل لەفەیەکێ دشۆم.' }
    ],
    vocabulary: [
      { word: 'Morning', translation: 'سپێدە' },
      { word: 'Face', translation: 'دەست و چاڤ' },
      { word: 'Brush', translation: 'فڕچەدکرن / برۆشکردن' },
      { word: 'Teeth', translation: 'ددان' }
    ]
  },
  {
    id: 'a1-47',
    level: 'A1',
    title: 'Shopping for Vegetables',
    titleKurdish: 'کڕینا کەسکاتییێ',
    dialogue: [
      { speaker: 'Seller', text: 'How many tomatoes do you need?', translation: 'تۆ چەند تەماتە دخوازی؟' },
      { speaker: 'Customer', text: 'Two kilograms, please. Are they fresh?', translation: 'دوو کیلۆیان، بێ زەحمەت. ئەرێ یێن تەیەی نە (فریشن)؟' },
      { speaker: 'Seller', text: 'Yes, they arrived this morning from the farm.', translation: 'بەلێ، ئەڤ سپێدێ ژ کێلگەی (مەزرەعێ) هاتین.' },
      { speaker: 'Customer', text: 'I also need some onions and potatoes.', translation: 'پێتڤی ب هندەک پیواز و پەتاتان ژی مە.' }
    ],
    vocabulary: [
      { word: 'Vegetables', translation: 'کەسکاتی' },
      { word: 'Tomatoes', translation: 'تەماتە' },
      { word: 'Fresh', translation: 'تەیەی / فڕێش' },
      { word: 'Onions', translation: 'پیواز' }
    ]
  },
  {
    id: 'a1-48',
    level: 'A1',
    title: 'In the Classroom',
    titleKurdish: 'د پۆلێ دا',
    dialogue: [
      { speaker: 'Teacher', text: 'Open your books to page 15.', translation: 'پەرتۆکێن خۆ ل لاپەرە ١٥ ڤەکەن.' },
      { speaker: 'Student', text: 'Excuse me, can I use your eraser?', translation: 'بێ زەحمەت، دکارم مەسحەکا (ژێبرەکا) تە بکاربینم؟' },
      { speaker: 'Teacher', text: 'Yes, here you go. Please be quiet now.', translation: 'بەلێ، فەرموو ئەڤەیە. بێ زەحمەت نوکە بێدەنگ بن.' },
      { speaker: 'Student', text: 'Thank you, teacher.', translation: 'سوپاس، مامۆستا.' }
    ],
    vocabulary: [
      { word: 'Page', translation: 'لاپەرە' },
      { word: 'Eraser', translation: 'مەسحە / ژێبر' },
      { word: 'Open', translation: 'ڤەکرن' },
      { word: 'Quiet', translation: 'بێدەنگ' }
    ]
  },
  {
    id: 'a1-49',
    level: 'A1',
    title: 'Taking a Taxi',
    titleKurdish: 'سواربوونا تەکسیکێ',
    dialogue: [
      { speaker: 'Driver', text: 'Where to, sir?', translation: 'بۆ کیدەرێ، خودانێ من؟' },
      { speaker: 'Passenger', text: 'To the city hospital, please. I am in a hurry.', translation: 'بۆ نەخۆشخانا باژێڕی، بێ زەحمەت. ئەز یێ ب لەزم.' },
      { speaker: 'Driver', text: 'No problem. I will take the fastest road.', translation: 'چو ئاریشە نینن. دێ ژ رێکا هەرە بلەز چم.' },
      { speaker: 'Passenger', text: 'How much is the fare?', translation: 'کرێ چەندە؟' }
    ],
    vocabulary: [
      { word: 'Hospital', translation: 'نەخۆشخانە' },
      { word: 'Hurry', translation: 'ب لەز' },
      { word: 'Fastest', translation: 'بلەزترین' },
      { word: 'Fare', translation: 'کرێیا تەکسیکێ یان پاسێ' }
    ]
  },
  {
    id: 'a1-50',
    level: 'A1',
    title: 'Invitation to Coffee',
    titleKurdish: 'داخوازکرن بۆ قەهوێ',
    dialogue: [
      { speaker: 'Zana', text: 'Are you free for coffee this afternoon?', translation: 'ئەرێ تو ئەڤرۆ پشتی نیڤرۆ یێ بەتاڵی (ڤالا) بۆ قەهوێ؟' },
      { speaker: 'Nisrin', text: 'Yes, I would love to. Where should we meet?', translation: 'بەلێ، ئەز حەز دکەم. ل کیدەرێ هەڤدوو ببینین؟' },
      { speaker: 'Zana', text: 'Let\'s meet at the cafe near the park at 4:30.', translation: 'وەرە دێ ل کافێیا نک پارکی هەڤدوو ببینین ل دەمژمێر ٤:٣٠.' },
      { speaker: 'Nisrin', text: 'Great, see you then!', translation: 'باشە، وێ دەمێ تە دبینم!' }
    ],
    vocabulary: [
      { word: 'Free', translation: 'بەتاڵ / ڤالا' },
      { word: 'Meet', translation: 'دیتن / هەڤدیتن' },
      { word: 'Afternoon', translation: 'پشتی نیڤرۆ' },
      { word: 'Great', translation: 'باش / مەزن' }
    ]
  },
  {
    id: 'a1-51',
    level: 'A1',
    title: 'Household Items',
    titleKurdish: 'کەرەستێن مالێ',
    dialogue: [
      { speaker: 'Wife', text: 'We need to buy a new lamp for the living room.', translation: 'پێتڤییە ئەم گلۆپەکا (لامپەکا) نوو بۆ ژوورا روینشتنێ بکڕین.' },
      { speaker: 'Husband', text: 'Is the old one broken?', translation: 'ئەرێ یا کەڤن یا شکەستییە؟' },
      { speaker: 'Wife', text: 'No, but it is too dim. We need more light.', translation: 'نە، لێ رۆناهیا وێ یا کێمە. پێتڤی ب رۆناهیەکا زێدەتر مە.' },
      { speaker: 'Husband', text: 'I will check the hardware store tomorrow.', translation: 'دێ سوبە چمە دۆکانا کەرەستێن ناڤمالێ.' }
    ],
    vocabulary: [
      { word: 'Lamp', translation: 'گلۆپ / لامپ' },
      { word: 'Living room', translation: 'ژوورا روینشتنێ' },
      { word: 'Broken', translation: 'شکەستی' },
      { word: 'Light', translation: 'رۆناهی' }
    ]
  },
  {
    id: 'a1-52',
    level: 'A1',
    title: 'Talking about Children',
    titleKurdish: 'ئاخفتن ل سەر زارۆکان',
    dialogue: [
      { speaker: 'Karwan', text: 'How old is your daughter now?', translation: 'کچا تە نوکە چەند سالی یە؟' },
      { speaker: 'Hevi', text: 'She is five years old. She started school last month.', translation: 'ئەو پێنج سالی یە. هەیڤا بووری دەست ب قوتابخانێ کر.' },
      { speaker: 'Karwan', text: 'Does she like her teacher?', translation: 'ئەرێ ئەو حەز ژ مامۆستایا خۆ دکەت؟' },
      { speaker: 'Hevi', text: 'Yes, she says her teacher is very kind.', translation: 'بەلێ، دبێژیت مامۆستایا من یا زۆر دلۆڤانە.' }
    ],
    vocabulary: [
      { word: 'Daughter', translation: 'کچ' },
      { word: 'Started', translation: 'دەستپێکرن' },
      { word: 'Month', translation: 'هەیڤ' },
      { word: 'Kind', translation: 'دلۆڤان / میهرەبان' }
    ]
  },
  {
    id: 'a1-53',
    level: 'A1',
    title: 'Visiting a Farm',
    titleKurdish: 'سەرەدانا کێلگەیەکێ (مەزرەعەکێ)',
    dialogue: [
      { speaker: 'Visitor', text: 'Look at the cows and sheep!', translation: 'تەماشەی چێل و پەزان بکە!' },
      { speaker: 'Farmer', text: 'We have fifty sheep and ten cows.', translation: 'مە پێنجی پەز و دەهـ چێل یێن هەیین.' },
      { speaker: 'Visitor', text: 'Do they give fresh milk every day?', translation: 'ئەرێ ئەوان رۆژانە شیرێ فریش (تەزە) ددەن؟' },
      { speaker: 'Farmer', text: 'Yes, we make cheese and yogurt from it.', translation: 'بەلێ، ئەم پەنیر و ماستی ژێ چێدکەین.' }
    ],
    vocabulary: [
      { word: 'Cows', translation: 'چێل' },
      { word: 'Sheep', translation: 'پەز' },
      { word: 'Milk', translation: 'شیر' },
      { word: 'Cheese', translation: 'پەنیر' }
    ]
  },
  {
    id: 'a1-54',
    level: 'A1',
    title: 'Emergency Call',
    titleKurdish: 'پەیوەندیا بەلەز (تەوارێ)',
    dialogue: [
      { speaker: 'Operator', text: 'Emergency services. What is your emergency?', translation: 'خزمەتگوزاریا تەوارێ (فریاکەفتنێ). بارودۆخێ تە یێ بەلەز چییە؟' },
      { speaker: 'Man', text: 'There is a fire in the building next to me!', translation: 'ئاگری بەرەبوویە د ئاڤاهیێ نک من دا!' },
      { speaker: 'Operator', text: 'What is the address, please?', translation: 'ناڤۆنیشان چییە، بێ زەحمەت؟' },
      { speaker: 'Man', text: 'It is 45 Flower Street. Please hurry!', translation: 'شەقاما گوڵان ژمارە ٤٥. بێ زەحمەت بلەز وەرن!' }
    ],
    vocabulary: [
      { word: 'Emergency', translation: 'تەوارێ / بەلەز' },
      { word: 'Fire', translation: 'ئاگر' },
      { word: 'Building', translation: 'ئاڤاهی' },
      { word: 'Address', translation: 'ناڤۆنیشان' }
    ]
  },
  {
    id: 'a1-55',
    level: 'A1',
    title: 'My House',
    titleKurdish: 'مالا من',
    dialogue: [
      { speaker: 'Guest', text: 'Your house is very beautiful.', translation: 'مالا تە یا زۆر جوانە.' },
      { speaker: 'Host', text: 'Thank you. It has a small garden and three rooms.', translation: 'سوپاس. باخچەیەکێ بچووک و سێ ژوور یێن هەیین.' },
      { speaker: 'Guest', text: 'The living room is very bright.', translation: 'ژوورا روینشتنێ یا زۆر رۆهنە (گەشە).' },
      { speaker: 'Host', text: 'Yes, it has big windows to let the sun in.', translation: 'بەلێ، پەنجەرێن مەزن یێن هەیین دا کو رۆژ بهێتە تێدا.' }
    ],
    vocabulary: [
      { word: 'Beautiful', translation: 'جوان' },
      { word: 'Windows', translation: 'پەنجەرە' },
      { word: 'Bright', translation: 'گەش / رۆهن' },
      { word: 'Rooms', translation: 'ژوور' }
    ]
  },
  {
    id: 'a1-56',
    level: 'A1',
    title: 'Gardening',
    titleKurdish: 'کارێن باخچەی',
    dialogue: [
      { speaker: 'Sipan', text: 'Are you planting flowers today?', translation: 'تۆ ئەڤرۆ گۆلان دچینی؟' },
      { speaker: 'Gozel', text: 'Yes, I am planting roses and tulips.', translation: 'بەلێ، ئەز گۆلێن سۆر و لالان دچینم.' },
      { speaker: 'Sipan', text: 'Do they need a lot of water?', translation: 'ئەرێ ئەوان گەلەک ئاڤ دڤێت؟' },
      { speaker: 'Gozel', text: 'Just once every morning.', translation: 'بتنێ جارهەکێ هەر سپێدە.' }
    ],
    vocabulary: [
      { word: 'Planting', translation: 'چاندن' },
      { word: 'Roses', translation: 'گۆلێن سۆر' },
      { word: 'Water', translation: 'ئاڤ' },
      { word: 'Every morning', translation: 'هەر سپێدە' }
    ]
  },
  {
    id: 'a1-57',
    level: 'A1',
    title: 'Learning English',
    titleKurdish: 'فێربوونا ئنگلیزیێ',
    dialogue: [
      { speaker: 'Student', text: 'English is a bit difficult for me.', translation: 'ئنگلیزی هندەکێ بۆ من یا ب زەحمەتە.' },
      { speaker: 'Friend', text: 'Don\'t worry. You just need to practice every day.', translation: 'خەمێ نەخۆ. تۆ بتنێ پێتڤی ب راهێنانێن رۆژانە هەی.' },
      { speaker: 'Student', text: 'I watch movies in English to learn.', translation: 'ئەز تەماشەی فلمێن ئنگلیزی دکەم دا کو فێرببم.' },
      { speaker: 'Friend', text: 'That is a very good method!', translation: 'ئەفە رێکارەکا گەلەک باشە!' }
    ],
    vocabulary: [
      { word: 'Difficult', translation: 'ب زەحمەت' },
      { word: 'Practice', translation: 'راهێنان / مەشق' },
      { word: 'Movies', translation: 'فلم' },
      { word: 'Method', translation: 'رێکار / شێواز' }
    ]
  },
  {
    id: 'a1-58',
    level: 'A1',
    title: 'Asking for Help',
    titleKurdish: 'داخوازکرنا هاریکارییێ',
    dialogue: [
      { speaker: 'Woman', text: 'Can you help me carry these heavy bags?', translation: 'دکاری هاریکاریا من بکەی بۆ هەلگرتنا ڤان جانتەیێن گران؟' },
      { speaker: 'Young Man', text: 'Of course. Give them to me.', translation: 'بێگومان. بدە من.' },
      { speaker: 'Woman', text: 'Thank you so much. You are very kind.', translation: 'زۆر سوپاس. تۆ یێ گەلەک دلۆڤانی.' },
      { speaker: 'Young Man', text: 'It is my pleasure.', translation: 'خۆشحالیا منە (سەر سەران و چاڤان).' }
    ],
    vocabulary: [
      { word: 'Carry', translation: 'هەلگرتن' },
      { word: 'Heavy', translation: 'گران' },
      { word: 'Bags', translation: 'جانتە' },
      { word: 'Pleasure', translation: 'خۆشحالی' }
    ]
  },
  {
    id: 'a1-59',
    level: 'A1',
    title: 'Telling a Story',
    titleKurdish: 'گۆتنا چیرۆکەکێ',
    dialogue: [
      { speaker: 'Child', text: 'Grandpa, tell me a story before I sleep.', translation: 'باپیرۆ، چیرۆکەکێ بۆ من بێژە بەری بنۆم.' },
      { speaker: 'Grandpa', text: 'Long ago, there was a brave hero in the mountains.', translation: 'بەری دەمەکێ درێژ، قارەمانەکێ ئازا د چیا دا هەبوو.' },
      { speaker: 'Child', text: 'Did he have a horse?', translation: 'ئەرێ وی ئەسپەک یێ هەبوو؟' },
      { speaker: 'Grandpa', text: 'Yes, a white horse that ran as fast as the wind.', translation: 'بەلێ، ئەسپەکێ سپی هەبوو یێ کو وەک بای بلەز دڕەڤی.' }
    ],
    vocabulary: [
      { word: 'Story', translation: 'چیرۆک' },
      { word: 'Brave', translation: 'ئازا / قارەمان' },
      { word: 'Horse', translation: 'ئەسپ' },
      { word: 'Wind', translation: 'با' }
    ]
  },
  {
    id: 'a1-60',
    level: 'A1',
    title: 'At the Beach',
    titleKurdish: 'ل کنارێ دەریایێ',
    dialogue: [
      { speaker: 'Tanya', text: 'The sand is very hot!', translation: 'خیار (لێف) یا زۆر گەرمە!' },
      { speaker: 'Renas', text: 'Let\'s go jump into the water to cool off.', translation: 'وەرە دێ خوە هاڤێینە د ئاڤێ دا دا کو فێنک بببین.' },
      { speaker: 'Tanya', text: 'Wait, I need to put on some sunscreen.', translation: 'اوەستە، من پێتڤی ب هندەک کرێما دژی رۆژیێ یە.' },
      { speaker: 'Renas', text: 'I love the sound of the waves.', translation: 'ئەز حەز ژ دەنگێ پێلێن دەریایێ دکەم.' }
    ],
    vocabulary: [
      { word: 'Beach', translation: 'کنارێ دەریایێ / لێف' },
      { word: 'Sand', translation: 'خیار / لمی' },
      { word: 'Waves', translation: 'پێل' },
      { word: 'Cool off', translation: 'فێنک بوون' }
    ]
  },
  {
    id: 'a1-61',
    level: 'A1',
    title: 'At the Museum',
    titleKurdish: 'ل مۆزەخانێ',
    dialogue: [
      { speaker: 'Guide', text: 'Please do not touch the ancient statues.', translation: 'بێ زەحمەت دەستان نەدەنە پەیکەرێن کەڤن.' },
      { speaker: 'Visitor', text: 'Are we allowed to take photos?', translation: 'ئەرێ رێپێدایە وێنە بگرین؟' },
      { speaker: 'Guide', text: 'Yes, but without using the flash.', translation: 'بەلێ، لێ بێ فلای (رۆناهیێ).' },
      { speaker: 'Visitor', text: 'This history is very impressive.', translation: 'ئەڤ دیرۆکە یا زۆر کارتێکەرە.' }
    ],
    vocabulary: [
      { word: 'Ancient', translation: 'کەڤنار' },
      { word: 'Touch', translation: 'دەست لێدان' },
      { word: 'Allowed', translation: 'رێپێدای' },
      { word: 'Impressive', translation: 'کارتێکەر' }
    ]
  },
  {
    id: 'a1-62',
    level: 'A1',
    title: 'Talking about Hobbies',
    titleKurdish: 'ئاخفتن ل سەر ئارەزوویان',
    dialogue: [
      { speaker: 'Sipan', text: 'What is your hobby?', translation: 'ئارەزوویا تە چییە؟' },
      { speaker: 'Alan', text: 'I love painting landscapes with water colors.', translation: 'ئەز حەز ژ وێنەکێشانا سروشتی دکەم ب رەنگێن ئاڤی.' },
      { speaker: 'Sipan', text: 'I enjoy playing chess with my brother.', translation: 'ئەز کەیفێ ژ یارییا شەترەنجێ دگەل برایێ خۆ دبینم.' },
      { speaker: 'Alan', text: 'Chess is a game for smart people.', translation: 'شەترەنج یارییا کەسێن زیرەک و ژیرە.' }
    ],
    vocabulary: [
      { word: 'Painting', translation: 'وێنەکێشان' },
      { word: 'Landscapes', translation: 'سروشت / دیمەن' },
      { word: 'Chess', translation: 'شەترەنج' },
      { word: 'Smart', translation: 'زیرەک / ژیر' }
    ]
  },
  {
    id: 'a1-63',
    level: 'A1',
    title: 'Ordering Pizza',
    titleKurdish: 'داخوازکرنا پیتزایێ',
    dialogue: [
      { speaker: 'Cashier', text: 'What kind of pizza would you like?', translation: 'تۆ کیژان جۆرێ پیتزایێ دخوازی؟' },
      { speaker: 'Customer', text: 'A large vegetable pizza with extra cheese, please.', translation: 'پیتزایەکا مەزن یا کەسکاتییێ دگەل پەنیری زێدە، بێ زەحمەت.' },
      { speaker: 'Cashier', text: 'Would you like to add olives or peppers?', translation: 'تۆ دخوازی زەیتوون یان بیبەران زێدە کەی؟' },
      { speaker: 'Customer', text: 'Yes, both please.', translation: 'بەلێ، هەردووکان بێ زەحمەت.' }
    ],
    vocabulary: [
      { word: 'Extra', translation: 'زێدە' },
      { word: 'Cheese', translation: 'پەنیر' },
      { word: 'Olives', translation: 'زەیتوون' },
      { word: 'Peppers', translation: 'بیبەر' }
    ]
  },
  {
    id: 'a1-64',
    level: 'A1',
    title: 'Describing Weather (Detailed)',
    titleKurdish: 'وەسفکرنا سەقای ب هوورنی',
    dialogue: [
      { speaker: 'Nisrin', text: 'Is it raining today?', translation: 'ئەرێ ئەڤرۆ باران دباریت؟' },
      { speaker: 'Karwan', text: 'No, but the sky is very cloudy and gray.', translation: 'نە، لێ ئەسمان یێ داگرتییە و ئەورە.' },
      { speaker: 'Nisrin', text: 'I think it might snow tonight.', translation: 'ئەز دهزرکم رەنگە ئەڤ شەڤە بەفر بباریت.' },
      { speaker: 'Karwan', text: 'The temperature is dropping fast.', translation: 'پلەیا گەرمێ بلەز یا دهێتە خوار.' }
    ],
    vocabulary: [
      { word: 'Cloudy', translation: 'ئەور' },
      { word: 'Snow', translation: 'بەفر' },
      { word: 'Temperature', translation: 'پلەیا گەرمێ' },
      { word: 'Dropping', translation: 'هاتنا خوار / کێمبوون' }
    ]
  },
  {
    id: 'a1-65',
    level: 'A1',
    title: 'Neighborhood Watch',
    titleKurdish: 'چاڤدێرییا جیرانان',
    dialogue: [
      { speaker: 'Hevi', text: 'Did you see the new car in the driveway?', translation: 'تە ترۆمبێلا نوو ل رێکا مالێ دیتی؟' },
      { speaker: 'Ali', text: 'Yes, it belongs to the family next door.', translation: 'بەلێ، یا خێزانا جیرانە.' },
      { speaker: 'Hevi', text: 'They are very quiet and polite neighbors.', translation: 'ئەو جیرانێن زۆر بێدەنگ و ب رێز و تەربیەتن.' },
      { speaker: 'Ali', text: 'We are lucky to have them.', translation: 'ئەم یێن ب بەختین کو ئەوە جیرانێن مەنە.' }
    ],
    vocabulary: [
      { word: 'Driveway', translation: 'رێکا پێش مالێ' },
      { word: 'Belongs', translation: 'یا وی یە / بۆ وی دزڤریت' },
      { word: 'Polite', translation: 'ب رێز / ب ئەدەب' },
      { word: 'Lucky', translation: 'ب بەخت / خودان شانس' }
    ]
  },
  {
    id: 'a1-66',
    level: 'A1',
    title: 'Buying a Laptop',
    titleKurdish: 'کڕینا لاپتۆپەکی',
    dialogue: [
      { speaker: 'Salesman', text: 'This laptop is very powerful and lightweight.', translation: 'ئەڤ لاپتۆپە یێ زۆر ب هێز و سڤکە.' },
      { speaker: 'Student', text: 'Does it have a long battery life?', translation: 'ئەرێ شەحنێ (باترییێ) زۆر دگریت؟' },
      { speaker: 'Salesman', text: 'Yes, it can last for twelve hours.', translation: 'بەلێ، دکاریت بۆ دوازدە دەمژمێران بمینیت.' },
      { speaker: 'Student', text: 'That is exactly what I need for university.', translation: 'ئەو تشتە یێ ب درۆستی ئەز بۆ زانکۆیێ پێتڤی مە.' }
    ],
    vocabulary: [
      { word: 'Powerful', translation: 'ب هێز' },
      { word: 'Lightweight', translation: 'سڤک / بێ کێش' },
      { word: 'Battery', translation: 'شەحن / باتری' },
      { word: 'University', translation: 'زانکۆ' }
    ]
  },
  {
    id: 'a1-67',
    level: 'A1',
    title: 'Planning a Picnic',
    titleKurdish: 'پلاندانان بۆ سفرەیەکێ',
    dialogue: [
      { speaker: 'Viyan', text: 'Let\'s go to the river bank for a picnic.', translation: 'وەرە دێ چینە لێفا رووباری بۆ سفرەیەکێ.' },
      { speaker: 'Karwan', text: 'Should I bring the charcoal for the grill?', translation: 'بلا ئەز رەژییا گەشکرنا گۆشتی بینم؟' },
      { speaker: 'Viyan', text: 'Yes, and I will bring the meat and bread.', translation: 'بەلێ، و ئەز دێ گۆشت و نانی ئینم.' },
      { speaker: 'Karwan', text: 'Don\'t forget the tea and cups!', translation: 'چایێ و فنجانان ژبیر نەکە!' }
    ],
    vocabulary: [
      { word: 'River bank', translation: 'لێفا رووباری' },
      { word: 'Charcoal', translation: 'رەژی' },
      { word: 'Grill', translation: 'گەشکرن / کبابکرن' },
      { word: 'Cups', translation: 'فنجان / کۆپ' }
    ]
  },
  {
    id: 'a1-68',
    level: 'A1',
    title: 'Visiting a Sick Friend',
    titleKurdish: 'سەرەدانا هەڤالەکێ نەخۆش',
    dialogue: [
      { speaker: 'Alan', text: 'How are you feeling today, Rozh?', translation: 'تۆ ئەڤرۆ هەست ب چ دکەی، رۆژ؟' },
      { speaker: 'Rozh', text: 'I am better. The doctor said I can go home tomorrow.', translation: 'ئەز باشترم. نوژداری گۆت تۆ دشێی سوبە بچییە مال.' },
      { speaker: 'Alan', text: 'I brought you some fresh fruit and magazines.', translation: 'من هندەک میوێن فریش و کۆڤار بۆ تە ئینان.' },
      { speaker: 'Rozh', text: 'Thank you for coming. It was boring here.', translation: 'سوپاس کو تۆ هاتی. ل ڤێرێ بێزاری بوو.' }
    ],
    vocabulary: [
      { word: 'Feeling', translation: 'هەستکردن' },
      { word: 'Better', translation: 'باشتر' },
      { word: 'Magazines', translation: 'کۆڤار' },
      { word: 'Boring', translation: 'بێزاری / وەنەوا' }
    ]
  },
  {
    id: 'a1-69',
    level: 'A1',
    title: 'In the Library (Finding a Spot)',
    titleKurdish: 'ل پەرتووکخانێ (دیتنا جهی)',
    dialogue: [
      { speaker: 'Male Student', text: 'Is this seat taken?', translation: 'ئەرێ ئەڤ کورسییە یا گرتییە؟' },
      { speaker: 'Female Student', text: 'No, it is free. You can sit here.', translation: 'نە، یا ڤالایە. تۆ دشێی ل ڤێرێ روینی.' },
      { speaker: 'Male Student', text: 'Is it okay if I use my laptop here?', translation: 'باشە ئەز لاپتۆپێ خۆ ل ڤێرێ بکاربینم؟' },
      { speaker: 'Female Student', text: 'Yes, just use your headphones for the sound.', translation: 'بەلێ، بتنێ سماعکێن (هێدفۆنێن) خۆ بکاربینە بۆ دەنگی.' }
    ],
    vocabulary: [
      { word: 'Seat', translation: 'کورسی / جهێ روینشتنێ' },
      { word: 'Taken', translation: 'گرتی / تێدا هەین' },
      { word: 'Headphones', translation: 'سماعک / هێدفۆن' },
      { word: 'Sound', translation: 'دەنگ' }
    ]
  },
  {
    id: 'a1-70',
    level: 'A1',
    title: 'Talking about Laundry',
    titleKurdish: 'ئاخفتن ل سەر جلان',
    dialogue: [
      { speaker: 'Sara', text: 'Whose socks are these on the floor?', translation: 'ئەڤ گۆرە یێن کێ نە ل سەر عەردی؟' },
      { speaker: 'Zana', text: 'They are mine. I am sorry, I will put them away.', translation: 'یێن منن. ببۆرە، دێ کەمە جهێ وان.' },
      { speaker: 'Sara', text: 'The laundry basket is full now.', translation: 'سەبەتەیا جلان یا تژی بوو نوکە.' },
      { speaker: 'Zana', text: 'I will start the washing machine right away.', translation: 'دێ نوکە دەست ب غەسەلێ کەم.' }
    ],
    vocabulary: [
      { word: 'Socks', translation: 'گۆرە' },
      { word: 'Floor', translation: 'عەرد / زەوی' },
      { word: 'Basket', translation: 'سەبەتە' },
      { word: 'Full', translation: 'تژی' }
    ]
  },
  {
    id: 'a1-71',
    level: 'A1',
    title: 'Feeding Animals',
    titleKurdish: 'خوارن دانا ئاژەلان',
    dialogue: [
      { speaker: 'Grandpa', text: 'Help me feed the chickens, little one.', translation: 'هاریکاریا من بکە بۆ خوارن دانا مریشکان، زارۆکێ من.' },
      { speaker: 'Child', text: 'What do they eat? Do they like seeds?', translation: 'ئەو چ دخۆن؟ ئەرێ حەز ژ دان و دەنکان دکەن؟' },
      { speaker: 'Grandpa', text: 'Yes, and they also like bread crumbs.', translation: 'بەلێ، و حەز ژ هویرکاتێن نانی ژی دکەن.' },
      { speaker: 'Child', text: 'Look! They are running towards us.', translation: 'تەماشە بکە! ئەوان بەرەڤ مە را دکەن.' }
    ],
    vocabulary: [
      { word: 'Chickens', translation: 'مریشک' },
      { word: 'Seeds', translation: 'دان و دەنگ / تۆف' },
      { word: 'Crumbs', translation: 'هویرکات' },
      { word: 'Towards', translation: 'بەرەڤ / بەر ب' }
    ]
  },
  {
    id: 'a1-72',
    level: 'A1',
    title: 'Describing a Room',
    titleKurdish: 'وەسفکرنا ژوورەکێ',
    dialogue: [
      { speaker: 'Interior Designer', text: 'This room has too much old furniture.', translation: 'ئەڤ ژوورە گەلەک کەلوپەلێن ناڤمالێ یێن کەڤن تێدا نە.' },
      { speaker: 'Owner', text: 'I want to make it modern and clean.', translation: 'من دڤێت بکەمە یا نوو و پاقژ.' },
      { speaker: 'Interior Designer', text: 'Let\'s paint the walls light gray and get a new rug.', translation: 'وەرە دێ دیواران ب رەنگێ قاوەیی گەش کێشین و مەفرەشەکا (راخەرەوکەکا) نوو کڕین.' },
      { speaker: 'Owner', text: 'That sounds like a good plan.', translation: 'پلاندانانەکا باشە.' }
    ],
    vocabulary: [
      { word: 'Furniture', translation: 'کەلوپەلێن ناڤمالێ' },
      { word: 'Modern', translation: 'نوو / سەردەم' },
      { word: 'Walls', translation: 'دیوار / کەند' },
      { word: 'Rug', translation: 'مەفرەش / راخەروک' }
    ]
  },
  {
    id: 'a1-73',
    level: 'A1',
    title: 'Asking for Price (Market)',
    titleKurdish: 'پرسیارکرنا بها (نرخ) ل بازاری',
    dialogue: [
      { speaker: 'Buyer', text: 'How much are these grapes per kilo?', translation: 'ئەڤ تری یە کیلۆیا وێ ب چەندێیە؟' },
      { speaker: 'Seller', text: 'They are two dollars, but very sweet.', translation: 'ب دوو دۆلارانە، لێ یا زۆر شرینە.' },
      { speaker: 'Buyer', text: 'Can you give me a discount if I buy five kilos?', translation: 'دکاری هندەکێ بۆ من کێم کەی (داشکانێ بکەی) ئەگەر پێنج کیلۆیان بکڕم؟' },
      { speaker: 'Seller', text: 'Okay, I will give them to you for eight dollars in total.', translation: 'باشە، دێ هەمییان ب هەشت دۆلاران دەمە تە.' }
    ],
    vocabulary: [
      { word: 'Grapes', translation: 'تری' },
      { word: 'Sweet', translation: 'شرین' },
      { word: 'Discount', translation: 'داشکان / کێمکرن' },
      { word: 'Total', translation: 'کۆی گشتی' }
    ]
  },
  {
    id: 'a1-74',
    level: 'A1',
    title: 'Meeting at the Cinema',
    titleKurdish: 'دیدارکرن ل سینەمایێ',
    dialogue: [
      { speaker: 'Leyla', text: 'Did you buy the tickets for the movie?', translation: 'تە پلێت (تیکێت) بۆ فلمی کڕین؟' },
      { speaker: 'Karwan', text: 'Yes, I bought them online already.', translation: 'بەلێ، من ژ بەریا نوکە ب رێکا ئینتەرنێتێ کڕین.' },
      { speaker: 'Leyla', text: 'What time does it start?', translation: 'دەمژمێر چەند دەستپێدکەت؟' },
      { speaker: 'Karwan', text: 'At seven o\'clock. Let\'s get some popcorn.', translation: 'ل دەمژمێر حەفتێ. وەرە دێ پاپکۆرنان (قەلییان) وەرگرین.' }
    ],
    vocabulary: [
      { word: 'Cinema', translation: 'سینەما' },
      { word: 'Online', translation: 'ب رێکا ئینتەرنێتێ' },
      { word: 'Start', translation: 'دەستپێکرن' },
      { word: 'Popcorn', translation: 'پاپکۆرن / قەلی' }
    ]
  },
  {
    id: 'a1-75',
    level: 'A1',
    title: 'Discussing Travel Plans',
    titleKurdish: 'بەحسکرنا پلانێن گەشتێ',
    dialogue: [
      { speaker: 'Alan', text: 'Where are you going for your vacation?', translation: 'بۆ بێهنڤەدانێ دێ چییە کیدەرێ؟' },
      { speaker: 'Sivan', text: 'I am planning to visit Turkey to see the sea.', translation: 'ئەز پلان دکەم بچمە تورکیا بۆ دیتنا دەریایێ.' },
      { speaker: 'Alan', text: 'Will you go by plane?', translation: 'ئەرێ دێ ب تەیارێ چی؟' },
      { speaker: 'Sivan', text: 'No, I prefer the bus to see the mountains on the way.', translation: 'نە، ئەز پاسێ هەلدبژێرم دا کو د رێکێ دا تەماشەی چیایان بکەم.' }
    ],
    vocabulary: [
      { word: 'Vacation', translation: 'بێهنڤەدان' },
      { word: 'Plane', translation: 'تەیارە / فرۆکە' },
      { word: 'Prefer', translation: 'هەلبژارتن / پێ باشتر بوون' },
      { word: 'Way', translation: 'رێک' }
    ]
  },
  {
    id: 'a1-76',
    level: 'A1',
    title: 'Weekend Shopping',
    titleKurdish: 'بازارکرنا دوماهیکا حەفتییێ',
    dialogue: [
      { speaker: 'Mother', text: 'We need to go to the bazaar for groceries.', translation: 'پێتڤییە ئەم بچینە بازاری بۆ کەرەستێن خوارنێ.' },
      { speaker: 'Daughter', text: 'Are we buying rice and oil today?', translation: 'ئەرێ ئەم ئەڤرۆ دێ برنجی و زەیتێ کڕین؟' },
      { speaker: 'Mother', text: 'Yes, and we need some spices for the biryani.', translation: 'بەلێ، و پێتڤی ب هندەک بهاراتان ژی مە بۆ بڕیانییێ.' },
      { speaker: 'Daughter', text: 'I will write a list so we don\'t forget anything.', translation: 'ئەز دێ لیستەکێ نڤیشم دا کو چو تشتان ژبیر نەکەین.' }
    ],
    vocabulary: [
      { word: 'Bazaar', translation: 'بازار' },
      { word: 'Groceries', translation: 'کەرەستێن خوارنێ' },
      { word: 'Spices', translation: 'بهارات' },
      { word: 'List', translation: 'لیستە' }
    ]
  },
  {
    id: 'a1-77',
    level: 'A1',
    title: 'My Favorite Teacher',
    titleKurdish: 'مامۆستایێ من یێ خوەشتڤی',
    dialogue: [
      { speaker: 'Ali', text: 'Who is your favorite teacher in school?', translation: 'باشترین مامۆستا ل قوتابخانێ ل دەڤ تە کێیە؟' },
      { speaker: 'Sara', text: 'Mrs. Hozan, she teaches mathematics.', translation: 'مامۆستا "هۆزان"، ئەو دەرسا بیرکارییێ (ماتماتیکێ) دبێژیت.' },
      { speaker: 'Ali', text: 'Is she strict with the students?', translation: 'ئەرێ ئەو یا توندە دگەل قوتابیان؟' },
      { speaker: 'Sara', text: 'No, she is very patient and explains everything clearly.', translation: 'نە، ئەو یا زۆر ب بێهنفەرهە و هەمی تشتان ب رۆهن و ئاشکرایی دیار دکەت.' }
    ],
    vocabulary: [
      { word: 'Mathematics', translation: 'بیرکاری / ماتماتیک' },
      { word: 'Strict', translation: 'توند' },
      { word: 'Patient', translation: 'ب بێهنفەرهـ / ب بێهن' },
      { word: 'Clearly', translation: 'ب ئاشکرایی / ب رۆهنی' }
    ]
  },
  {
    id: 'a1-78',
    level: 'A1',
    title: 'Cooking Dinner',
    titleKurdish: 'چێکرنا شێڤێ',
    dialogue: [
      { speaker: 'Husband', text: 'What are we having for dinner tonight?', translation: 'بۆ ئەڤ شەڤە ئەم دێ چ بۆ شێڤێ خۆین؟' },
      { speaker: 'Wife', text: 'I am making soup and frying some fish.', translation: 'ئەز یێ نیسکەکێ (شۆربەیەکێ) و هندەک ماسییان سوور دکەم.' },
      { speaker: 'Husband', text: 'That smells wonderful! Can I set the table?', translation: 'بێنا وێ زۆر یا خۆشە! ئەرێ مێزا خوارنێ رێک بێخم؟' },
      { speaker: 'Wife', text: 'Yes, please put the plates and forks out.', translation: 'بەلێ، بێ زەحمەت قاپ و چەتالان دانە سەر.' }
    ],
    vocabulary: [
      { word: 'Soup', translation: 'نیسک / شۆربە' },
      { word: 'Frying', translation: 'سوورکردن' },
      { word: 'Wonderful', translation: 'ب سەرسۆم / جوان' },
      { word: 'Forks', translation: 'چەتال' }
    ]
  },
  {
    id: 'a1-79',
    level: 'A1',
    title: 'In the Garden',
    titleKurdish: 'د باخچەی دا',
    dialogue: [
      { speaker: 'Father', text: 'Let\'s water the flowers together.', translation: 'وەرە دێ پێکڤە ئاڤێ دەینە گۆلان.' },
      { speaker: 'Son', text: 'The soil is very dry today.', translation: 'ئەڤرۆ عەرد (ئەرز) یێ زۆر حشکە.' },
      { speaker: 'Father', text: 'Yes, it was very hot this afternoon.', translation: 'بەلێ، ئەڤرۆ پشتی نیڤرۆ گەلەک گەرم بوو.' },
      { speaker: 'Son', text: 'Look, there is a butterfly on the rose!', translation: 'تەماشە بکە، پەپوولەک یا ل سەر گۆلا سۆر!' }
    ],
    vocabulary: [
      { word: 'Soil', translation: 'ئەرز / خاک' },
      { word: 'Dry', translation: 'حشک' },
      { word: 'Hot', translation: 'گەرم' },
      { word: 'Butterfly', translation: 'پەپوولە' }
    ]
  },
  {
    id: 'a1-80',
    level: 'A1',
    title: 'Choosing a Movie',
    titleKurdish: 'هەلبژارتنا فلمەکی',
    dialogue: [
      { speaker: 'Media', text: 'What movie should we watch tonight?', translation: 'بۆ ئەڤ شەڤە ئەم تەماشەی کیژان فلمی بکەین؟' },
      { speaker: 'Dilshad', text: 'How about an action movie or a comedy?', translation: 'ئەرێ فلمەکێ "ئاکشن" یان کۆمیدی چاوایە؟' },
      { speaker: 'Media', text: 'I prefer a comedy. I want to laugh.', translation: 'ئەز فلمەکێ کۆمیدی هەلدبژێرم. من دڤێت بکەنم.' },
      { speaker: 'Dilshad', text: 'Okay, let\'s look for a funny one.', translation: 'باشە، وەرە دێ ل فلمەکێ ب پێکەنین و کۆمیدی گەڕێین.' }
    ],
    vocabulary: [
      { word: 'Action', translation: 'ئاکشن / ب بزاڤ' },
      { word: 'Comedy', translation: 'کۆمیدی / ب پێکەنین' },
      { word: 'Laugh', translation: 'کەنین' },
      { word: 'Funny', translation: 'کۆمیدی / ب پێکەنین' }
    ]
  },
  {
    id: 'a1-81',
    level: 'A1',
    title: 'Visiting the Zoo',
    titleKurdish: 'سەرەدانا باخچێ ئاژەلان',
    dialogue: [
      { speaker: 'Child', text: 'Dad, look! A huge elephant!', translation: 'بابۆ، تەماشە بکە! فیلەکێ گەلەک مەزن!' },
      { speaker: 'Father', text: 'Yes, it is very strong. Do you want to see the lions?', translation: 'بەلێ، ئەو یێ زۆر ب هێزە. تو دخوازی شێران ببینی؟' },
      { speaker: 'Child', text: 'I am a little scared of them. Let\'s see the monkeys.', translation: 'ئەز هندەکێ ژ وان دترسم. وەرە دێ چینە نک مەیموینان.' },
      { speaker: 'Father', text: 'Monkeys are very funny and love bananas.', translation: 'مەیموین زۆر د کۆمیدین و حەز ژ مۆزان دکەن.' }
    ],
    vocabulary: [
      { word: 'Elephant', translation: 'فیل' },
      { word: 'Lion', translation: 'شێر' },
      { word: 'Scared', translation: 'ترس' },
      { word: 'Monkeys', translation: 'مەیموین' }
    ]
  },
  {
    id: 'a1-82',
    level: 'A1',
    title: 'Describing a Job (Doctor)',
    titleKurdish: 'وەسفکرنا کارەکی (نوژدار)',
    dialogue: [
      { speaker: 'Interviewer', text: 'What is the most difficult part of being a doctor?', translation: 'نەخۆشترین پشک د کارێ نوژدارییێ دا چییە؟' },
      { speaker: 'Doctor', text: 'Working long hours in the hospital and seeing sick people.', translation: 'کارکرن بۆ دەمژمێرێن درێژ ل نەخۆشخانێ و دیتنا کەسێن نەخۆش.' },
      { speaker: 'Interviewer', text: 'But you help many people stay healthy.', translation: 'لێ تۆ هاریکاریا گەلەک کەسان دکەی دا کو ب سلامەت بمینن.' },
      { speaker: 'Doctor', text: 'Yes, that is the most rewarding feeling.', translation: 'بەلێ، ئەوە خۆشترین هەست.' }
    ],
    vocabulary: [
      { word: 'Difficult', translation: 'ب زەحمەت' },
      { word: 'Healthy', translation: 'ب سلامەت / ساخلەم' },
      { word: 'Rewarding', translation: 'ب مفا / کەیفخۆشکەر' },
      { word: 'Feeling', translation: 'هەست' }
    ]
  },
  {
    id: 'a1-83',
    level: 'A1',
    title: 'Going to the Gym',
    titleKurdish: 'چوونە هۆڵا وەرزشی (جێم)',
    dialogue: [
      { speaker: 'Ali', text: 'How often do you go to the gym?', translation: 'تۆ چەند جاران دچییە وەرزشخانێ؟' },
      { speaker: 'Karwan', text: 'I go three times a week to stay fit.', translation: 'ئەز هەفتێ سێ جاران دچم دا کو لەشێ من یێ رێکخستی بیت.' },
      { speaker: 'Ali', text: 'Do you lift weights or run on the machine?', translation: 'تۆ قورسییان (ئاسنی) هەلدگری یان ل سەر ئامیرێ غارێ دای؟' },
      { speaker: 'Karwan', text: 'I do both, and I feel more energetic now.', translation: 'ئەز هەردووکان دکەم، و نوکە هەست ب چالاکیەکا زێدەتر دکەم.' }
    ],
    vocabulary: [
      { word: 'Often', translation: 'پتریا جاران' },
      { word: 'Fit', translation: 'رێکخستی / ساخلەم' },
      { word: 'Weights', translation: 'قورسی / ئاسن' },
      { word: 'Energetic', translation: 'چالاک / ب هێز' }
    ]
  },
  {
    id: 'a1-84',
    level: 'A1',
    title: 'In the Winter',
    titleKurdish: 'د وەرزێ زستانێ دا',
    dialogue: [
      { speaker: 'Viyan', text: 'It is freezing outside! Wear your warm coat.', translation: 'ل دەرڤە یێ زۆر سارە! قەپۆتێ (کۆتێ) خۆ یێ گەرم ل خۆ بکە.' },
      { speaker: 'Hozan', text: 'I will also bring my gloves and hat.', translation: 'ئەز دێ دەستکێش و کلاکا خۆ ژی ئینم.' },
      { speaker: 'Viyan', text: 'The mountains are white with snow now.', translation: 'چیا نوکە ب بەفرێ یێن سپی بووین.' },
      { speaker: 'Hozan', text: 'Everything looks so silent and peaceful.', translation: 'هەمی تشت یێ بێدەنگ و ب ئارامی دیار دکەن.' }
    ],
    vocabulary: [
      { word: 'Freezing', translation: 'زۆر سار / جەمدین' },
      { word: 'Coat', translation: 'قەپۆت / کۆت' },
      { word: 'Gloves', translation: 'دەستکێش' },
      { word: 'Silent', translation: 'بێدەنگ' }
    ]
  },
  {
    id: 'a1-85',
    level: 'A1',
    title: 'Inviting a Friend to Dinner',
    titleKurdish: 'داخوازکرنا هەڤالەکی بۆ شێڤێ',
    dialogue: [
      { speaker: 'Alan', text: 'Are you busy this Friday evening?', translation: 'ئەرێ تۆ ئەڤێ ئەینیێ پشتی نیڤرۆ یێ مژوولی؟' },
      { speaker: 'Renas', text: 'No, I have no plans. Why?', translation: 'نە، چو پلانێن من نینن. بۆچی؟' },
      { speaker: 'Alan', text: 'I would like to invite you to my house for dinner.', translation: 'من دڤێت تە داخواز بکەمە مالا خۆ بۆ شێڤێ.' },
      { speaker: 'Renas', text: 'That is very kind of you. I will be there!', translation: 'ئەفە ژ دلۆڤانیا تە یە. ئەز دێ وێرێ بم!' }
    ],
    vocabulary: [
      { word: 'Busy', translation: 'مژوول' },
      { word: 'Plans', translation: 'پلان' },
      { word: 'Invite', translation: 'داخوازکردن' },
      { word: 'Kind', translation: 'دلۆڤان / باش' }
    ]
  },
  {
    id: 'a1-86',
    level: 'A1',
    title: 'Ordering a Taxi (App)',
    titleKurdish: 'داخوازکرنا تەکسیکەکێ (ب رێکا بەرنامەی)',
    dialogue: [
      { speaker: 'Woman', text: 'Is the taxi driver near our location?', translation: 'ئەرێ شوفێرێ تەکسیکێ نێزیکی جهێ مە یە؟' },
      { speaker: 'Husband', text: 'Yes, the map says he will arrive in three minutes.', translation: 'بەلێ، نەخشە دبێژیت ئەو دێ گەریتە لێرە پشتی سێ خولەکان.' },
      { speaker: 'Woman', text: 'What is the car color and plate number?', translation: 'رەنگێ ترۆمبێلێ و ژمارا وێ چییە؟' },
      { speaker: 'Husband', text: 'It is a white Toyota with number 12345.', translation: 'تۆیۆتایەکا سپی یە ب ژمارە ١٢٣٤٥.' }
    ],
    vocabulary: [
      { word: 'Location', translation: 'جهـ' },
      { word: 'Map', translation: 'نەخشە' },
      { word: 'Plate number', translation: 'ژمارا ترۆمبێلێ' },
      { word: 'Arrive', translation: 'گەهشتن' }
    ]
  },
  {
    id: 'a1-87',
    level: 'A1',
    title: 'At the Bookstore',
    titleKurdish: 'ل پەرتووکفرۆشییێ',
    dialogue: [
      { speaker: 'Student', text: 'Do you have any English-Kurdish dictionaries?', translation: 'ئەرێ چو فەرهەنگێن ئنگلیزی-کوردی ل دەڤ تە هەنە؟' },
      { speaker: 'Clerk', text: 'Yes, we have a small one and a comprehensive one.', translation: 'بەلێ، مە یا بچووک و یا گشتگیر ژی یا هەی.' },
      { speaker: 'Student', text: 'How much is the comprehensive one?', translation: 'بهایێ یا گشتگیر ب چەندێیە؟' },
      { speaker: 'Clerk', text: 'It is 15 dollars. It also has examples.', translation: '١٥ دۆلارن. نموونە ژی تێدا هەنە.' }
    ],
    vocabulary: [
      { word: 'Dictionary', translation: 'فەرهەنگ' },
      { word: 'Comprehensive', translation: 'گشتگیر / تێر و تەسەل' },
      { word: 'Examples', translation: 'نموونە' },
      { word: 'Price', translation: 'نرخ' }
    ]
  },
  {
    id: 'a1-88',
    level: 'A1',
    title: 'Discussing a News Story',
    titleKurdish: 'بەحسکرنا چیرۆکەکا نووچەیان',
    dialogue: [
      { speaker: 'Ali', text: 'Did you hear about the new bridge building?', translation: 'تە بهیستی کو دێ کێلەکێ (کۆپرییەکێ) نوو ئاڤا کەن؟' },
      { speaker: 'Leyla', text: 'Yes, it will connect the two sides of the city.', translation: 'بەلێ، دێ هەردوو لایێن باژێڕی ب هەڤڤە گرێدەت.' },
      { speaker: 'Ali', text: 'It will make the traffic much lighter.', translation: 'دێ هاتنوچوونێ گەلەک سڤکتر لێ کەت.' },
      { speaker: 'Leyla', text: 'I hope it finishes soon.', translation: 'هیوادارم زوو ب دوماهی بهێت.' }
    ],
    vocabulary: [
      { word: 'Bridge', translation: 'کێل / کۆپری' },
      { word: 'Connect', translation: 'گرێدان' },
      { word: 'Traffic', translation: 'ترافیک / هاتنوچوون' },
      { word: 'Lighter', translation: 'سڤکتر' }
    ]
  },
  {
    id: 'a1-89',
    level: 'A1',
    title: 'Asking about a Route',
    titleKurdish: 'پرسیارکرن ل سەر رێکەکێ',
    dialogue: [
      { speaker: 'Driver', text: 'Is this the right road to the stadium?', translation: 'ئەرێ ئەڤە رێکا درۆستە بۆ یاریگەهێ (ستادیۆمێ)؟' },
      { speaker: 'Policeman', text: 'No, you missed the turn. Go back to the light.', translation: 'نە، تۆ ژ وێ زڤڕینێ دەرباز بووی. ڤەگەڕە سەر ترافتلایتێ (گلۆپا رێیێ).' },
      { speaker: 'Driver', text: 'Should I turn left or right there?', translation: 'بەرەڤ دەستێ چەپێ یان راستێ زڤڕم؟' },
      { speaker: 'Policeman', text: 'Turn right, and you will see it in front of you.', translation: 'بەرەڤ دەستێ راستێ پێک ڤە کە، دێ ل پێشیا خۆ بینی.' }
    ],
    vocabulary: [
      { word: 'Stadium', translation: 'یاریگەهـ / ستادیۆم' },
      { word: 'Missed', translation: 'دەربازبوون / فەوتین' },
      { word: 'Turn', translation: 'زڤڕین / سووربوون' },
      { word: 'Front', translation: 'پێش / بەرهەمبەر' }
    ]
  },
  {
    id: 'a1-90',
    level: 'A1',
    title: 'Complimenting a Meal',
    titleKurdish: 'وەسفکرنا خوارنەکێ',
    dialogue: [
      { speaker: 'Guest', text: 'This food is absolutely delicious!', translation: 'ئەڤ خوارنە ب درۆستی یا ب تام و خۆشە!' },
      { speaker: 'Host', text: 'I am so glad you like it. It is my grandmother\'s recipe.', translation: 'ئەز کەیفخۆشم کو ب دلێ تە بووی. ئەفە رێکارا (وەسفا) داپیرا منە.' },
      { speaker: 'Guest', text: 'What are the main ingredients?', translation: 'کەرەستێن سەرەکی چنە؟' },
      { speaker: 'Host', text: 'Rice, meat, and many traditional spices.', translation: 'برنج، گۆشت، و گەلەک بهاراتێن کەلتووری.' }
    ],
    vocabulary: [
      { word: 'Absolutely', translation: 'ب درۆستی / ب گشتی' },
      { word: 'Recipe', translation: 'وەسفا خوارنێ / رێکار' },
      { word: 'Ingredients', translation: 'کەرەستە / تێکتلێن' },
      { word: 'Traditional', translation: 'کەلتووری' }
    ]
  },
  {
    id: 'a1-91',
    level: 'A1',
    title: 'Planning a Birthday Party',
    titleKurdish: 'پلاندانان بۆ ئاهەنگا رۆژا ژدایکبوونێ',
    dialogue: [
      { speaker: 'Sara', text: 'Let\'s buy a big cake for my brother\'s birthday.', translation: 'وەرە دێ کێکەکا مەزن بۆ رۆژا ژدایکبوونا برایێ من کڕین.' },
      { speaker: 'Ali', text: 'What flavor does he like?', translation: 'چ تامەکێ حەز دکەت؟' },
      { speaker: 'Sara', text: 'Chocolate is his favorite. We also need balloons.', translation: 'شوکوڵاتە یا وی یا خوەشتڤی یە. پێتڤی ب بوفکێن (بالۆنێن) هەوایی دەین ژی مە.' },
      { speaker: 'Ali', text: 'I will invite our cousins too.', translation: 'ئەز دێ ئامۆزا و پسمامێن مە ژی داخواز کەم.' }
    ],
    vocabulary: [
      { word: 'Flavor', translation: 'تام / چێژ' },
      { word: 'Chocolate', translation: 'شوکوڵاتە' },
      { word: 'Balloons', translation: 'بۆفک / بالۆن' },
      { word: 'Cousins', translation: 'پسمام / پۆسمام' }
    ]
  },
  {
    id: 'a1-92',
    level: 'A1',
    title: 'Talking about Health',
    titleKurdish: 'ئاخفتن ل سەر ساخلەمییێ',
    dialogue: [
      { speaker: 'Media', text: 'You look tired today. Are you okay?', translation: 'تۆ ئەڤرۆ یێ وەنەوا (ماندی) دیار دکەی. ئەرێ تۆ باشی؟' },
      { speaker: 'Zana', text: 'I have a sore throat and a cough.', translation: 'گەڕییێ من یێ دهێشیت و ئەز دکۆخیم.' },
      { speaker: 'Media', text: 'You should stay home and drink warm lemon water.', translation: 'پێتڤییە ل مال بمینی و ئاڤا لیمۆنا گەرم بنۆشی.' },
      { speaker: 'Zana', text: 'I will go to the doctor if I don\'t feel better.', translation: 'ئەز دێ چمە نک نوژداری ئەگەر هەست ب باشیێ نەکەم.' }
    ],
    vocabulary: [
      { word: 'Tired', translation: 'ماندی / وەنەوا' },
      { word: 'Sore throat', translation: 'گەڕیی ئێشان / قۆڕگ ئێشان' },
      { word: 'Cough', translation: 'کۆخین' },
      { word: 'Stay home', translation: 'ل مال مان' }
    ]
  },
  {
    id: 'a1-93',
    level: 'A1',
    title: 'Renting an Apartment (Detailed)',
    titleKurdish: 'ب کرێ گرتنا شوقەیەکێ ب هووربنی',
    dialogue: [
      { speaker: 'Renter', text: 'Is the apartment on the first floor?', translation: 'ئەرێ شوقە ل نهۆما ئێکێ یە؟' },
      { speaker: 'Owner', text: 'No, it is on the third floor, but there is an elevator.', translation: 'نە، ل نهۆما سێیێ یە، لێ مەشعەدە (ئەسانسۆر) یا هەی.' },
      { speaker: 'Renter', text: 'Is electricity included in the rent?', translation: 'ئەرێ کرێیا کارەبێ ژی تێدایە؟' },
      { speaker: 'Owner', text: 'No, you pay for electricity and water separately.', translation: 'نە، تۆ دێ هەقێ کارەبێ و ئاڤێ ب جودا دەی.' }
    ],
    vocabulary: [
      { word: 'Floor', translation: 'نهۆم' },
      { word: 'Elevator', translation: 'مەشحەد / ئەسانسۆر' },
      { word: 'Electricity', translation: 'کارەب' },
      { word: 'Separately', translation: 'ب جودا' }
    ]
  },
  {
    id: 'a1-94',
    level: 'A1',
    title: 'Going to a Concert',
    titleKurdish: 'چوونە ئاهەنگەکا مۆزیکێ',
    dialogue: [
      { speaker: 'Hozan', text: 'The Kurdish singer is performing tonight.', translation: 'هونەرمەندێ کورد ئەڤ شەڤە دێ ئاهەنگێ گێڕیت.' },
      { speaker: 'Viyan', text: 'I love his voice! Where is the concert?', translation: 'ئەز حەز ژ دەنگێ وی دکەم! ئاهەنگ ل کیدەرێیە؟' },
      { speaker: 'Hozan', text: 'It is at the cultural hall downtown.', translation: 'ل هۆڵا رەوشەنبیری ل سەنتەرێ باژێڕی یە.' },
      { speaker: 'Viyan', text: 'Let\'s buy the tickets before they run out.', translation: 'وەرە دێ تیکێتان کڕین بەری تمام ببن.' }
    ],
    vocabulary: [
      { word: 'Singer', translation: 'هونەرمەند / سترانبێژ' },
      { word: 'Voice', translation: 'دەنگ' },
      { word: 'Concert', translation: 'ئاهەنگا مۆزیکێ' },
      { word: 'Run out', translation: 'تمام بوون / نەمان' }
    ]
  },
  {
    id: 'a1-95',
    level: 'A1',
    title: 'Buying a New Smartphone',
    titleKurdish: 'کڕینا مۆبایلەکا نوو',
    dialogue: [
      { speaker: 'Buyer', text: 'Does this phone have a good camera?', translation: 'ئەرێ کامیرەیەکا باش ل ڤێ مۆبایلێ یا هەی؟' },
      { speaker: 'Seller', text: 'Yes, it takes very clear photos even at night.', translation: 'بەلێ، وێنێن زۆر ئاشکرا دگریت حەتا د شەڤێ دا ژی.' },
      { speaker: 'Buyer', text: 'How much memory does it have?', translation: 'میژووا وێ (میمۆری) چەندە؟' },
      { speaker: 'Seller', text: 'It has 128 gigabytes of storage.', translation: '١٢٨ گێگابایت یێن هەلگرتنێ یێن تێدا.' }
    ],
    vocabulary: [
      { word: 'Camera', translation: 'کامیرە' },
      { word: 'Clear', translation: 'ئاشکرا / زەلال' },
      { word: 'Memory', translation: 'بیرهاتن / میمۆری' },
      { word: 'Storage', translation: 'هەلگرتن / بیرگە' }
    ]
  },
  {
    id: 'a1-96',
    level: 'A1',
    title: 'Discussing a Dream (Vision)',
    titleKurdish: 'بەحسکرنا خەونەکێ (دووربینی)',
    dialogue: [
      { speaker: 'Zin', text: 'I have a vision of opening my own English center.', translation: 'خەونەکا من یا هەی دا کو سەنتەرەکێ فێربوونا ئنگلیزیێ ڤەکەم.' },
      { speaker: 'Renas', text: 'That is wonderful. You are very hardworking.', translation: 'ئەفە زۆر یا جوانە. تۆ یێ گەلەک کۆششکەری (بزاڤکەری).' },
      { speaker: 'Zin', text: 'I want to encourage young people to learn languages.', translation: 'ئەز دخوازیم گەنجان هان بدەم دا کو فێری زمانان ببن.' },
      { speaker: 'Renas', text: 'Language is a bridge to the world.', translation: 'زمان کێلەکە (کۆپرییەکە) بۆ جیهانێ.' }
    ],
    vocabulary: [
      { word: 'Vision', translation: 'خەون / دووربینی' },
      { word: 'Center', translation: 'سەنتەر' },
      { word: 'Encourage', translation: 'هاندان / رێزپێدان' },
      { word: 'Bridge', translation: 'کێل / کۆپری' }
    ]
  },
  {
    id: 'a1-97',
    level: 'A1',
    title: 'In the Kitchen (Baking Cake)',
    titleKurdish: 'ل مەتەبخێ (چێکرنا کێکێ)',
    dialogue: [
      { speaker: 'Daughter', text: 'Mom, how much flour do we need for the cake?', translation: 'دایێ، کا چەند ئار مە بۆ کێکێ دڤێت؟' },
      { speaker: 'Mom', text: 'Three cups of flour and two eggs.', translation: 'سێ کۆپێن ئاری و دوو هێک.' },
      { speaker: 'Daughter', text: 'Should I add the sugar now?', translation: 'بلا ئەز شەکرێ نوکە زێدە کەم؟' },
      { speaker: 'Mom', text: 'Yes, and mix it slowly with the butter.', translation: 'بەلێ، و ب هێدی دگەل کەرێ تێکەل بکە.' }
    ],
    vocabulary: [
      { word: 'Flour', translation: 'ئار' },
      { word: 'Mix', translation: 'تێکەل کردن' },
      { word: 'Slowly', translation: 'ب هێدی / ب هێمنی' },
      { word: 'Butter', translation: 'کەرە / نیڤشک' }
    ]
  },
  {
    id: 'a1-98',
    level: 'A1',
    title: 'Meeting a New Neighbor',
    titleKurdish: 'دیتنا جیرانەکێ نوو',
    dialogue: [
      { speaker: 'Neighbor', text: 'Hello, I just moved into the house next door.', translation: 'سڵاڤ، پشتی نوکە ئەز چوومە د مالا جیران دا.' },
      { speaker: 'Local', text: 'Welcome to the neighborhood! My name is Azad.', translation: 'ب خێر بێی بۆ ڤێ کۆلانێ! ناڤێ من ئازادە.' },
      { speaker: 'Neighbor', text: 'Nice to meet you. I am Sivan.', translation: 'ب دیتنا تە کەیفخۆشم. ئەز سیڤانم.' },
      { speaker: 'Local', text: 'If you need anything, please ask me.', translation: 'ئەگەر پێتڤی ب هەر تشتەکی هەبوو، بێ زەحمەت ژ من پرسیار بکە.' }
    ],
    vocabulary: [
      { word: 'Moved', translation: 'چوون / ڤەگوهاستن' },
      { word: 'Neighbor', translation: 'جیران' },
      { word: 'Neighborhood', translation: 'دەڤەر / کۆلان' },
      { word: 'Ask', translation: 'پرسیارکردن' }
    ]
  },
  {
    id: 'a1-99',
    level: 'A1',
    title: 'At a Sports Match',
    titleKurdish: 'ل یارییەکا وەرزشی',
    dialogue: [
      { speaker: 'Fan 1', text: 'The atmosphere in the stadium is amazing!', translation: 'سەقا (کەشوهەوا) ل یاریگەهێ زۆر یێ سەرسۆڕهێنەرە!' },
      { speaker: 'Fan 2', text: 'Yes, the fans are shouting very loud.', translation: 'بەلێ، هاندەر یێ ب دەنگەکێ بلند غار دکەن (هەوار دکەن).' },
      { speaker: 'Fan 1', text: 'I hope our team scores the winning goal.', translation: 'هیوادارم تیما مە گۆلا سەرکەفتنێ تومار بکەت.' },
      { speaker: 'Fan 2', text: 'Look! They are very near the net now!', translation: 'تەماشە بکە! ئەوان گەلەک نێزیکی تۆرێ بووینە نوکە!' }
    ],
    vocabulary: [
      { word: 'Atmosphere', translation: 'سەقا / کەشوهەوا' },
      { word: 'Shouting', translation: 'هەوار / غارکرن' },
      { word: 'Winning', translation: 'سەرکەفتن' },
      { word: 'Net', translation: 'تۆر / شەبەک' }
    ]
  },
  {
    id: 'a1-100',
    level: 'A1',
    title: 'Saying Goodbye',
    titleKurdish: 'ماڵئاڤاهیکردن',
    dialogue: [
      { speaker: 'Alan', text: 'It is late. I have to go now.', translation: 'دیر بوو. پێتڤییە ئەز نوکە بچم.' },
      { speaker: 'Sara', text: 'Thank you for visiting us. It was a nice day.', translation: 'سوپاس بۆ سەرەدانا تە. رۆژەکا خۆش بوو.' },
      { speaker: 'Alan', text: 'I had a great time too. See you soon!', translation: 'ئەز ژی گەلەک کەیف ب دەمێ خۆ بر. تە دبێنم بەم زووانە!' },
      { speaker: 'Sara', text: 'Take care and goodbye!', translation: 'خۆ بپارێزە و ماڵئاڤا!' }
    ],
    vocabulary: [
      { word: 'Late', translation: 'دیر / درەنگ' },
      { word: 'Visiting', translation: 'سەرەدان' },
      { word: 'Soon', translation: 'بەم زووانە' },
      { word: 'Take care', translation: 'خۆ بپارێزە' }
    ]
  },
  {
    id: 'a2-1',
    level: 'A2',
    title: 'At the Restaurant',
    titleKurdish: 'ل خوارنگەهێ',
    dialogue: [
      { speaker: 'Waiter', text: 'Welcome! Are you ready to order?', translation: 'ب خێر بێی! تو بەرهەڤی بۆ داخوازکرنێ؟' },
      { speaker: 'Sara', text: 'Yes, I would like a chicken kebab, please.', translation: 'بەلێ، من کەبابەکێ مریشکێ دڤێت، بێ زەحمەت.' },
      { speaker: 'Waiter', text: 'Anything to drink?', translation: 'چ ڤەخوارن دڤێت؟' },
      { speaker: 'Sara', text: 'A glass of pomegranate juice, please.', translation: 'کۆپەکێ شەربەتا هناران، بێ زەحمەت.' },
      { speaker: 'Waiter', text: 'Sure. Anything else?', translation: 'بێگومان. چو دی هەیە؟' },
      { speaker: 'Sara', text: 'No, that is all. Thank you.', translation: 'نە، ئەوە هەمی. سوپاس.' }
    ],
    vocabulary: [
      { word: 'Ready', translation: 'بەرهەڤ' },
      { word: 'Order', translation: 'داخوازکرن' },
      { word: 'Chicken', translation: 'مریشک' },
      { word: 'Glass', translation: 'کۆپ / گلاس' },
      { word: 'Pomegranate', translation: 'هنار' }
    ]
  },
  // B1 Level
  {
    id: 'b1-1',
    level: 'B1',
    title: 'Planning a Trip',
    titleKurdish: 'پلاندانان بۆ گەشتەکێ',
    dialogue: [
      { speaker: 'Hevi', text: 'We should visit Akre this weekend. The nature there is beautiful.', translation: 'پێتڤییە ئەڤێ دوماهیکا حەفتیێ بچینە ئاکرێ. سروشت ل وێرێ گەلەک یێ جوانە.' },
      { speaker: 'Zana', text: 'That sounds like a great idea. Should we go by car or bus?', translation: 'ئەفە هزرەکا زۆر باشە. ئەرێ ب ترۆمبێلێ بچین یان ب پاسێ؟' },
      { speaker: 'Hevi', text: 'I think going by car is more convenient. We can stop whenever we want.', translation: 'ب هزرا من ب ترۆمبێلێ بچین چێترە. ئەم دشێین هەر دەمێ مە بڤێت بوەستین.' },
      { speaker: 'Zana', text: 'I agree. Let\'s check the weather forecast first.', translation: 'ئەز دگەل تە مە. دێ بەری هەر تشتەکی تەماشەی سەقای کەین.' }
    ],
    vocabulary: [
      { word: 'Weekend', translation: 'دوماهیکا حەفتیێ' },
      { word: 'Nature', translation: 'سروشت' },
      { word: 'Convenient', translation: 'گونجای / ب دلێ مرۆڤی' },
      { word: 'Forecast', translation: 'پێشبینی' }
    ]
  },
  // B2 Level
  {
    id: 'b2-1',
    level: 'B2',
    title: 'Job Interview',
    titleKurdish: 'چاوپێکەفتنا کاری',
    dialogue: [
      { speaker: 'Interviewer', text: 'Tell me about your previous work experience.', translation: 'بەحسێ ئەزموونا خۆ یا کاری یا بەری نوکە بۆ من بکە.' },
      { speaker: 'Candidate', text: 'I worked as a software developer for three years. I focused on web applications.', translation: 'من سێ سالان وەک گەشەپێدەرێ سۆفتوێری کار کریە. من گرنگی ب بەرنامەیێن وێبێ ددا.' },
      { speaker: 'Interviewer', text: 'Why do you want to work for our company?', translation: 'بۆچی تو دخوازێ ل کۆمپانیا مە کار بکەی؟' },
      { speaker: 'Candidate', text: 'Your company has a great reputation for innovation, and I want to contribute to your success.', translation: 'کۆمپانیا هەوە ناڤودەنگیەکێ باش یێ هەی د بوارێ نووگەریێ دا، و ئەز دخوازم پشکدار ببم د سەرکەفتنا هەوە دا.' }
    ],
    vocabulary: [
      { word: 'Experience', translation: 'ئەزموون' },
      { word: 'Reputation', translation: 'ناڤودەنگ' },
      { word: 'Innovation', translation: 'نووگەری' },
      { word: 'Contribute', translation: 'پشکداربوون / هاریکاریکردن' }
    ]
  },
  // C1 Level
  {
    id: 'c1-1',
    level: 'C1',
    title: 'Environmental Discussion',
    titleKurdish: 'گۆتۆبێژەکا ژینگەیی',
    dialogue: [
      { speaker: 'Karwan', text: 'The impact of climate change is becoming increasingly evident in our region.', translation: 'کارتێکرنا گوهۆڕینا سەقای ب شێوازەکێ زێدەترێ دیار د دەڤەرا مە دا دەردکەڤیت.' },
      { speaker: 'Lana', text: 'Indeed. We need to implement more sustainable practices and reduce our reliance on fossil fuels.', translation: 'راستە. ئەم پێتڤی نە چەندین رێکارێن بەردەوام ئەنجام بدەین و پشتبەستنا خۆ ب سۆتەمنییێن کانی یێ کێم کەین.' },
      { speaker: 'Karwan', text: 'Government intervention is crucial, but individual responsibility cannot be overlooked either.', translation: 'دەستێوەردانا حکومەتێ یا فەرە، لێ بەرپرسیارەتیا تاکەکەسی ژی نابیت بهێتە پشتگوێخستن.' }
    ],
    vocabulary: [
      { word: 'Impact', translation: 'کارتێکرن' },
      { word: 'Sustainable', translation: 'بەردەوام / ژینگەیی'
      },
      { word: 'Reliance', translation: 'پشتبەستن' },
      { word: 'Crucial', translation: 'زۆر فەر / گرینگ' }
    ]
  },
  // C2 Level
  {
    id: 'c2-1',
    level: 'C2',
    title: 'Philosophy of Existence',
    titleKurdish: 'فەلسەفەیا هەبوونی',
    dialogue: [
      { speaker: 'Professor', text: 'Existentialism posited that individuals define their own meaning in life.', translation: 'فەلسەفەیا هەبوونی (Existentialism) دبێژیت کو تاکەکەسی ب خۆ رامانا ژیانا خۆ دەستنیشان دکەت.' },
      { speaker: 'Student', text: 'But doesn\'t that lead to a sense of nihilism if there is no inherent objective purpose?', translation: 'لێ ئەرێ ئەڤە نابیتە ئەگەرێ هەستا "نەمانێ" ئەگەر چو مەرهەمەکا رەها و ئامانجەکا بنەرەتی نەبیت؟' },
      { speaker: 'Professor', text: 'On the contrary, it empowers the human spirit to transcend mere biological existence.', translation: 'ب پێچەوانە، ئەفە هێزێ ددەتە روحا مرۆڤی کو مرۆڤ ژ هەبوونا بایۆلۆژی بهێتە دەر.' }
    ],
    vocabulary: [
      { word: 'Posited', translation: 'دانان / پێشنیارکرن' },
      { word: 'Inherent', translation: 'بنەرەتی / تێدا هەی' },
      { word: 'Empowers', translation: 'هێزپێدان' },
      { word: 'Transcends', translation: 'تێپەراندن / چوونە سەرتر' }
    ]
  }
];
