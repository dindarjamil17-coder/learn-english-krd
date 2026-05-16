export interface GrammarTopic {
  id: string;
  title: string;
  titleKurdish: string;
  category: string;
  content: {
    rule: string;
    explanation: string;
    structure?: string; // Added structure formula
    examples: {
      en: string;
      ku: string;
    }[];
    notes?: string[]; // Added notes/tips section
  }[];
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleKurdish: 'دەمێ نوکە یێ سادە',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم دەمێ نوکە یێ سادە بکار دئینین بۆ ئاخفتنێ ل سەر وان تشتێن کو ب بەردەوامی ڕوو ددەن، یان ڕاستیێن گشتی، یان ژی عاداتێن مە یێن ڕۆژانە.',
        examples: [
          { en: 'I drink water every day.', ku: 'ئەز هەر ڕۆژ ئاڤێ ڤەدۆخۆم.' },
          { en: 'The sun rises in the east.', ku: 'ڕۆژ ل ڕۆژهەلاتێ هەلدێت.' }
        ],
        notes: [
          'ئەڤ دەمە بۆ تشتێن دەمکی ناهێتە بکارئینان.',
          'بۆ ڕاستیێن زانستی هەر دەم ئەڤ دەمە دهێتە بکارئینان.'
        ]
      },
      {
        rule: 'پێکهاتە (Structure)',
        explanation: 'پێکهاتە دابەش دبیت ل سەر دوو کۆمان ل دویڤ بکەری (Subject).',
        structure: 'Subject + Verb (s/es) + Object',
        examples: [
          { en: 'He plays football.', ku: 'ئەو تەپاپێ دکەت.' },
          { en: 'They play football.', ku: 'ئەو تەپاپێ دکەن.' }
        ],
        notes: [
          'بۆ (He, She, It) پیتەکا (s) یان (es) دکەڤیتە سەر فعلێ.',
          'بۆ (I, We, You, They) فعل وەک خۆ دمینیت.'
        ]
      }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    titleKurdish: 'دەمێ بۆری یێ سادە',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم دەمێ بۆری یێ سادە بکار دئینین بۆ ئاخفتنێ ل سەر تشتەکێ کو ل دەمەکێ دیارکری ل ڕابردوویدا ڕوو دابیت و ب دووماهی هاتبی.',
        structure: 'Subject + Verb (2nd form) + Object',
        examples: [
          { en: 'I watched a movie yesterday.', ku: 'من دوهی سەیری فیلمەکێ کر.' },
          { en: 'She visited London last year.', ku: 'وێ سالا چووی سەرەدانا لەندەن کر.' }
        ],
        notes: [
          'پێدڤی یە دەمێ ڕوودانێ دیار بیت (وەکی: yesterday, last week).',
          'فعل دابەش دبن بۆ Regular (ed) و Irregular (گوهۆڕین).'
        ]
      }
    ]
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    titleKurdish: 'دەمێ نوکە یێ بەردەوام',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی دەمی بکار دئینین بۆ وان کارێن کو ڕێک ل ڤی دەمی (دەما ئاخفتنێ) د ڕوودانێ دانە.',
        structure: 'Subject + am/is/are + Verb-ing + Object',
        examples: [
          { en: 'I am studying English now.', ku: 'ئەز نوکە یێ ئنگلیزی دخوینم.' },
          { en: 'They are playing in the garden.', ku: 'ئەو یێ ل باخچەی یاری دکەن.' }
        ],
        notes: [
          'پەیڤێن (now, at the moment) نیشانێن ڤی دەمی نە.',
          'هندەک فعل هەین (stative verbs) د ڤی دەمی دا ناهێنە بکارئینان وەکی (love, hate, know).'
        ]
      }
    ]
  },
  {
    id: 'articles',
    title: 'Articles (A, An, The)',
    titleKurdish: 'ئامرازێن ناساندنێ',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'A and An',
        explanation: 'ئەم (A) و (An) بکار دئینین بۆ ناڤێن تاک (singular) یێن کو نە دیار بن.',
        structure: 'A/An + Singular Noun',
        examples: [
          { en: 'I have a book.', ku: 'من پەرتووکەک یا هەی.' },
          { en: 'I ate an apple.', ku: 'من سێڤەک خوار.' }
        ],
        notes: [
          '(An) بکار دئینین ئەگەر ناڤ ب پیتەکا دەنگدار (a, e, i, o, u) دەستپێ بکەت.',
          'ئەڤ ئامرازە بۆ ناڤێن کۆم (plural) ناهێنە بکارئینان.'
        ]
      },
      {
        rule: 'The',
        explanation: 'ئەم (The) بکار دئینین بۆ وان تشتێن کو د دیار بن یان مە بەری نوکە بەحس کربن.',
        structure: 'The + Noun (Singular/Plural)',
        examples: [
          { en: 'The book is on the table.', ku: 'پەرتووک ل سەر مێزێ یە.' },
          { en: 'The students are here.', ku: 'قوتابی ل لێرەن.' }
        ],
        notes: [
          'بۆ تشتێن بێ وێنە (unique) بکار دهێت وەکی (The Sun, The Moon).',
          'بۆ ناڤێن وەلاتان بکار ناهێت مەگەر وەلات یێ پێک هاتبی ژ چەند پشکەکا وەکی (The USA).'
        ]
      }
    ]
  },
  {
    id: 'future-simple',
    title: 'Future Simple',
    titleKurdish: 'دەمێ پاشەڕۆژێ یێ سادە',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی دەمی بکار دئینین بۆ ئاخفتنێ ل سەر وان کارێن کو دێ ل پاشەڕۆژێ دا ڕوو دەن، یان بۆ بڕیارێن خێرا.',
        structure: 'Subject + will + Verb (base form) + Object',
        examples: [
          { en: 'I will travel to Erbil tomorrow.', ku: 'ئەز دێ سوبە گەشت کەم بۆ هەولێرێ.' },
          { en: 'It will rain later.', ku: 'دێ پاشتر باران باریت.' }
        ],
        notes: [
          'پەیڤا (will) نیشانا سەرەکی یا ڤی دەمی یە.',
          'فعل پشتی (will) چ گوهۆڕین ب سەردا ناهێن.'
        ]
      }
    ]
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    titleKurdish: 'ئاڤەڵناڤ (سیفەت)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'جهێ سیفەتی (Position)',
        explanation: 'ل زمانێ ئنگلیزی دا، سیفەت هەر دەم بەری ناڤی دهێت، بەروڤاژی زمانێ کوردی.',
        structure: 'Adjective + Noun',
        examples: [
          { en: 'A beautiful house.', ku: 'خانیەکێ جوان.' },
          { en: 'A fast car.', ku: 'ترۆمبێلەکا ب لەز.' }
        ],
        notes: [
          'سیفەت چ جاران کۆم (plural) نابیت.',
          'دشێت پشتی فعلێن (be) ژی بهێت، وەکی: The car is fast.'
        ]
      }
    ]
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    titleKurdish: 'دەمێ نوکە یێ تەمام',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی دەمی بکار دئینین بۆ کارەکێ کو ل ڕابردوویدا ڕوو دابیت بەلێ ئەنجامێ وی یان کارتێکرنا وی هەتا نوکە یا مایی.',
        structure: 'Subject + have/has + Verb (3rd form) + Object',
        examples: [
          { en: 'I have lost my keys.', ku: 'من کلیلێن خۆ بەرزە کرینە (هەتا نوکە یێن بەرزەن).' },
          { en: 'She has finished her homework.', ku: 'وێ ئەرکێ خۆ یێ مال ب دووماهی ئینایە.' }
        ],
        notes: [
          'بۆ (I, We, You, They) (have) بکار دهێت.',
          'بۆ (He, She, It) (has) بکار دهێت.',
          'دەمێ ڕوودانێ نە یێ دیارە، گرنگی ل سەر ئەنجامی یە.'
        ]
      }
    ]
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    titleKurdish: 'دەمێ بۆری یێ بەردەوام',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر کارەکێ کو ل ڕابردوویدا بۆ دەمەکێ درێژ یێ بەردەوام بی.',
        structure: 'Subject + was/were + Verb-ing + Object',
        examples: [
          { en: 'I was sleeping at 10 PM yesterday.', ku: 'ئەز دوهی ل دەمژمێر ١٠ ی شەڤێ یێ نڤستی بووم.' },
          { en: 'They were playing football when it rained.', ku: 'ئەو یێ مژویلی یاریێ بوون دەمێ باران باری.' }
        ],
        notes: [
          '(was) بۆ (I, He, She, It) بکار دهێت.',
          '(were) بۆ (We, You, They) بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'modals-can',
    title: 'Can and Could',
    titleKurdish: 'شیان (Can and Could)',
    category: 'Modals (فعلێن هاریکار)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم (Can) بکار دئینین بۆ شیانێن نوکە، و (Could) بۆ شیانێن ڕابردوو یان داخوازێن ب ڕێز.',
        structure: 'Subject + can/could + Verb (base form)',
        examples: [
          { en: 'I can speak English.', ku: 'ئەز دشێم ب ئنگلیزی باخڤم.' },
          { en: 'Could you help me, please?', ku: 'دشێی هاریکاریا من بکەی، ب زەحمەت؟' }
        ],
        notes: [
          'پشتی ڤان فعلان، فعل چ گوهۆڕین ب سەردا ناهێن.',
          'نەرێ (Negative) دبیتە (Cannot / Could not).'
        ]
      }
    ]
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    titleKurdish: 'نەدیار (Passive Voice)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی شێوازی بکار دئینین دەمێ بکەر (Subject) نە یێ گرنگ بیت، یان یێ نەدیار بیت، و گرنگی ل سەر کارێ هاتیە کرن بیت.',
        structure: 'Object + be (am/is/are/was/were) + Verb (3rd form)',
        examples: [
          { en: 'The room is cleaned every day.', ku: 'ژوور هەر ڕۆژ دهێتە پاقژکرن.' },
          { en: 'The window was broken yesterday.', ku: 'پەنجەرە دوهی هاتە شکاندن.' }
        ],
        notes: [
          'فعل هەر دەم د شێوەیێ سێیێ دایە (Past Participle).',
          'ئەگەر مە بڤێت بکەری دیار بکەین، پەیڤا (by) بکار دئینین.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-1',
    title: 'First Conditional',
    titleKurdish: 'مەرجێ ئێکێ (First Conditional)',
    category: 'Conditionals (مەرج)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر تشتەکێ کو ئەگەرەکێ مەزن یێ هەین د پاشەڕۆژێ دا ڕوو بدەت ئەگەر مەرجەک بجهـ بهێت.',
        structure: 'If + Present Simple, will + Verb',
        examples: [
          { en: 'If it rains, I will stay at home.', ku: 'ئەگەر باران بباریت، دێ ل مال مینم.' },
          { en: 'If you study hard, you will pass.', ku: 'ئەگەر تو ب باشی بخوینی، دێ سەرکەڤی.' }
        ],
        notes: [
          'پشکا ئێکێ (مەرج) د دەمێ نوکە دایە.',
          'پشکا دووێ (ئەنجام) د دەمێ پاشەڕۆژێ دایە.'
        ]
      }
    ]
  },
  {
    id: 'prepositions-time',
    title: 'Prepositions of Time',
    titleKurdish: 'ئامرازێن دەمی (In, At, On)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەڤ ئامرازە دهێنە بکارئینان بۆ دیارکرنا دەمێن جودا.',
        structure: 'In (Months/Years), On (Days), At (Exact Time)',
        examples: [
          { en: 'In July / In 2024', ku: 'ل مەها حەفت / ل سالا ٢٠٢٤' },
          { en: 'On Monday / On my birthday', ku: 'ل ڕۆژا دوشەمبی / ل ڕۆژا ژدایکبوونا من' },
          { en: 'At 5 o\'clock / At night', ku: 'ل دەمژمێر ٥ / ل شەڤێ' }
        ],
        notes: [
          '(In) بۆ دەمێن درێژ بکار دهێت.',
          '(On) بۆ ڕۆژ و ڕێکەفتان بکار دهێت.',
          '(At) بۆ دەمێن دیارکری و جەژن و شەڤێ بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'comparatives',
    title: 'Comparatives',
    titleKurdish: 'بەراوردکرن (Comparatives)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ بەراوردکرنا د ناڤبەرا دوو تشتان یان دوو کەسان دا.',
        structure: 'Adj + er + than / more + Adj + than',
        examples: [
          { en: 'Ahmed is taller than Ali.', ku: 'ئەحمەد درێژترە ژ عەلی.' },
          { en: 'This car is more expensive than that one.', ku: 'ئەڤ ترۆمبێلە گرانترە ژ وێ.' }
        ],
        notes: [
          'ئەگەر سیفەت یێ کورت بیت (er) دکەڤیتە سەر.',
          'ئەگەر سیفەت یێ درێژ بیت (more) بەری دهێت.'
        ]
      }
    ]
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous',
    titleKurdish: 'دەمێ نوکە یێ تەمام یێ بەردەوام',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر کارەکێ کو ل ڕابردوویدا دەستپێکری و هەتا نوکە یێ بەردەوامە، یان ژی نوکە یێ ب دووماهی هاتی و کارتێکرنا وی یا دیارە.',
        structure: 'Subject + have/has + been + Verb-ing',
        examples: [
          { en: 'I have been waiting for two hours.', ku: 'ئەز بۆ ماوێ دوو دەمژمێرانە یێ ل هیڤیێ.' },
          { en: 'It has been raining all day.', ku: 'هەمی ڕۆژێ باران یا باری.' }
        ],
        notes: [
          'گرنگی ل سەر ماوێ (Duration) کارێ هاتیە کرن یە.',
          'پەیڤێن (for, since) گەلەک دهێنە بکارئینان.'
        ]
      }
    ]
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect',
    titleKurdish: 'دەمێ بۆری یێ تەمام',
    category: 'Tenses (دەم)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی دەمی بکار دئینین دەمێ دوو کار ل ڕابردوویدا ڕوو دابن، و ئەم بڤێین بێژین کیژان کار بەری یێ دی ڕوو دایە.',
        structure: 'Subject + had + Verb (3rd form)',
        examples: [
          { en: 'When I arrived, the train had left.', ku: 'دەمێ ئەز گەهشتیم، شەمەندەفەر چووبوو.' },
          { en: 'I had finished my work before he called.', ku: 'من کارێ خۆ ب دووماهی ئینابوو بەری ئەو تەلەفۆنێ بکەت.' }
        ],
        notes: [
          'ئەو کارێ بەری یێ دی ڕوو دای، د دەمێ (Past Perfect) دایە.',
          'ئەو کارێ پاشتر ڕوو دای، د دەمێ (Past Simple) دایە.'
        ]
      }
    ]
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    titleKurdish: 'ئاخفتنا ڤەگۆهاستی (Reported Speech)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'دەمێ ئەم ئاخفتنا کەسەکێ دی ڤەدگۆهێزین بۆ کەسەکێ دی.',
        structure: 'Direct: "I am tired" -> Reported: He said that he was tired.',
        examples: [
          { en: 'She said, "I like ice cream."', ku: 'وێ گۆت، "ئەز حەز ژ ئایسکرێمێ دکەم."' },
          { en: 'She said that she liked ice cream.', ku: 'وێ گۆت کو ئەو حەز ژ ئایسکرێمێ دکەت.' }
        ],
        notes: [
          'دەم (Tense) هەر دەم هەنگاڤەکێ دزڤڕیتە پاش.',
          'Present Simple دگوهۆریت بۆ Past Simple.'
        ]
      }
    ]
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    titleKurdish: 'ڕستێن پەیوەندیێ (Who, Which, That)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ پێدانا پێزانینێن زێدەتر ل سەر کەسەکێ یان تشتەکێ بێی کو ڕستەکا نوو دەستپێ بکەین.',
        structure: 'Who (for people), Which (for things), That (for both)',
        examples: [
          { en: 'The man who lives next door is a doctor.', ku: 'ئەو زەلامێ ل تەنیشتا مە دژیت دکتۆرە.' },
          { en: 'The car which I bought is fast.', ku: 'ئەو ترۆمبێلا من کڕی یا ب لەزە.' }
        ],
        notes: [
          '(Who) تەنێ بۆ مروڤان بکار دهێت.',
          '(Which) تەنێ بۆ تشت و گیانەوەران بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'countable-nouns',
    title: 'Countable and Uncountable',
    titleKurdish: 'ناڤێن دهێنە هەژمارتن و نەهێنە هەژمارتن',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'هندەک ناڤ دهێنە هەژمارتن (وەکی سێڤ) و هندەک ناهێنە هەژمارتن (وەکی ئاڤ یان برنج).',
        structure: 'Many (Countable), Much (Uncountable)',
        examples: [
          { en: 'How many apples do you have?', ku: 'چەند سێڤ یێن ل دەف تە؟' },
          { en: 'How much water do you drink?', ku: 'تو چەند ئاڤێ ڤەدۆخۆی؟' }
        ],
        notes: [
          '(A lot of) بۆ هەردووکان بکار دهێت.',
          'ناڤێن نەهێنە هەژمارتن چ جاران (s) ناگریت.'
        ]
      }
    ]
  },
  {
    id: 'used-to',
    title: 'Used to',
    titleKurdish: 'بەری نوکە (Used to)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر کارەکێ کو ل ڕابردوویدا ب بەردەوامی مە دکر، بەلێ نوکە ئەم ناکەین.',
        structure: 'Subject + used to + Verb (base form)',
        examples: [
          { en: 'I used to smoke, but I stopped.', ku: 'من بەری نوکە جگارە دکێشان، بەلێ من یا هێلای.' },
          { en: 'She used to live in London.', ku: 'وێ بەری نوکە ل لەندەن دژیا.' }
        ],
        notes: [
          'تەنێ بۆ ڕابردووی دهێتە بکارئینان.',
          'نەرێ (Negative) دبیتە (did not use to).'
        ]
      }
    ]
  },
  {
    id: 'modals-must-should',
    title: 'Must and Should',
    titleKurdish: 'پێدڤی و ئامۆژگاری (Must and Should)',
    category: 'Modals (فعلێن هاریکار)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم (Must) بکار دئینین بۆ پێدڤیەکا بهێز یان قانوونێ، و (Should) بۆ ئامۆژگاریێ.',
        structure: 'Subject + must/should + Verb (base form)',
        examples: [
          { en: 'You must wear a seatbelt.', ku: 'پێدڤی یە تو قاییشا دلنیاییێ ببەستی.' },
          { en: 'You should eat more fruit.', ku: 'باشترە تو پتر فێقی بخۆی.' }
        ],
        notes: [
          '(Must) گەلەک ژ (Should) ب هێزترە.',
          'نەرێ (Must not) بۆ قەدەغەکرنێ بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'question-tags',
    title: 'Question Tags',
    titleKurdish: 'پسیارێن کورت (Question Tags)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەڤە پسیارێن کورتن کو دکەڤنە دووماهیا ڕستێ دا کو ئەم پشت ڕاست ببین ژ تشتەکێ.',
        structure: 'Positive sentence + negative tag / Negative sentence + positive tag',
        examples: [
          { en: 'It is cold, isn\'t it?', ku: 'هەوا یێ سارە، وانییە؟' },
          { en: 'You don\'t like coffee, do you?', ku: 'تو حەز ژ قەهویێ ناکی، وایە؟' }
        ],
        notes: [
          'ئەگەر ڕستە یا موجەب بیت، پسیار یا سالبی یە.',
          'ئەگەر ڕستە یا سالبی بیت، پسیار یا موجەب یە.'
        ]
      }
    ]
  },
  {
    id: 'adverbs-frequency',
    title: 'Adverbs of Frequency',
    titleKurdish: 'ئاڤەڵکارێن دووبارەبوونێ (Always, Never, etc.)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ دیارکرنا هندێ کو کارەک چەند جاران دووبارە دبیت.',
        structure: 'Always (100%), Usually (80%), Often (60%), Sometimes (40%), Never (0%)',
        examples: [
          { en: 'I always wake up early.', ku: 'ئەز هەر دەم زوو ژ خەو ڕادبم.' },
          { en: 'She never eats meat.', ku: 'ئەو چ جاران گۆشتی ناخۆت.' }
        ],
        notes: [
          'ئەڤ پەیڤە دکەڤنە بەری فعلا سەرەکی.',
          'بەلێ دکەڤنە پشتی فعلا (be) وەکی: I am always happy.'
        ]
      }
    ]
  },
  {
    id: 'superlatives',
    title: 'Superlatives',
    titleKurdish: 'پلەیا هەرە بەرز (Superlatives)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤی شێوازی بکار دئینین دەمێ ئەم تشتەکێ یان کەسەکێ بەراورد دکەین دگەل کۆمەکا تشتان یان کەسان (پتر ژ دوو).',
        structure: 'the + Adj + est / the + most + Adj',
        examples: [
          { en: 'Mount Everest is the highest mountain in the world.', ku: 'چیایێ ئەڤرێست بلندترین چیایە ل جیهانێ.' },
          { en: 'She is the most intelligent student in the class.', ku: 'ئەو زیرەکترین قوتابیە د پۆلێ دا.' }
        ],
        notes: [
          'بۆ سیفەتێن کورت (est) دکەڤیتە سەر.',
          'بۆ سیفەتێن درێژ (the most) بەری دهێت.',
          'هەر دەم پەیڤا (the) بەری سیفەتی دهێت.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-2',
    title: 'Second Conditional',
    titleKurdish: 'مەرجێ دووێ (Second Conditional)',
    category: 'Conditionals (مەرج)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر تشتەکێ خەیالی یان نە ڕاست ل دەمێ نوکە، یان تشتەکێ کو ئەگەرەکێ کێم یێ هەین ڕوو بدەت.',
        structure: 'If + Past Simple, would + Verb (base form)',
        examples: [
          { en: 'If I won the lottery, I would buy a big house.', ku: 'ئەگەر ئەز د یانسیبێ دا ببرم، دێ خانیەکێ مەزن کڕم (بەلێ ئەز نوکە یێ نەبریمە).' },
          { en: 'If I were you, I would study more.', ku: 'ئەگەر ئەز ل جهێ تە بام، دا پتر خوینم.' }
        ],
        notes: [
          'ئەم (were) بکار دئینین بۆ هەمی بکەران (I, He, She, It) د ڤی مەرجی دا.',
          'ئەڤە تەنێ خەیالە و نە ڕاستیە.'
        ]
      }
    ]
  },
  {
    id: 'reflexive-pronouns',
    title: 'Reflexive Pronouns',
    titleKurdish: 'جێناڤێن ڤەگەر (Myself, Yourself, etc.)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤان جێناڤان بکار دئینین دەمێ بکەر و بەرکار (Subject and Object) هەمان کەس بن.',
        structure: 'Myself, Yourself, Himself, Herself, Itself, Ourselves, Yourselves, Themselves',
        examples: [
          { en: 'I cut myself while cooking.', ku: 'من دەستێ خۆ بڕی دەمێ من خوارن چێدکر.' },
          { en: 'They enjoyed themselves at the party.', ku: 'وان کەیفا خۆ کر ل ئاهەنگێ.' }
        ],
        notes: [
          'بۆ تاک (self) و بۆ کۆم (selves) بکار دهێت.',
          'دشێت بۆ تەئکیدکرنێ ژی بهێت، وەکی: I did it myself.'
        ]
      }
    ]
  },
  {
    id: 'possessives',
    title: 'Possessive Adjectives and Pronouns',
    titleKurdish: 'سیفەت و جێناڤێن خوەدانێ (Possessives)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ دیارکرنا خوەدانێ تشتەکێ.',
        structure: 'Adj: My, Your, His, Her, Its, Our, Their / Pronoun: Mine, Yours, His, Hers, Ours, Theirs',
        examples: [
          { en: 'This is my book. (Adj)', ku: 'ئەڤە پەرتووکا منە.' },
          { en: 'This book is mine. (Pronoun)', ku: 'ئەڤ پەرتووکە یا منە.' }
        ],
        notes: [
          'سیفەت (My, Your...) هەر دەم بەری ناڤی دهێن.',
          'جێناڤ (Mine, Yours...) پشتی ناڤی دهێن یان ب تنێ دهێن.'
        ]
      }
    ]
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds and Infinitives',
    titleKurdish: 'ناڤ و فعل (Gerunds and Infinitives)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'هندەک فعل هەین پشتی وان (ing) دهێت، و هندەکێن دی (to + verb) دهێت.',
        structure: 'Verb + -ing / Verb + to + Verb',
        examples: [
          { en: 'I enjoy swimming.', ku: 'ئەز حەز ژ مەلەڤانیێ دکەم.' },
          { en: 'I want to go home.', ku: 'من دڤێت بچمە مال.' }
        ],
        notes: [
          'فعلێن وەکی (enjoy, finish, mind, suggest) (ing) دگریت.',
          'فعلێن وەکی (want, hope, decide, promise) (to) دگریت.'
        ]
      }
    ]
  },
  {
    id: 'modals-may-might',
    title: 'May and Might',
    titleKurdish: 'ئەگەر و گۆمان (May and Might)',
    category: 'Modals (فعلێن هاریکار)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم (May) و (Might) بکار دئینین بۆ ئاخفتنێ ل سەر تشتەکێ کو ئەگەرەکێ هەین ڕوو بدەت (بەلێ ئەم نە د پشت ڕاستین).',
        structure: 'Subject + may/might + Verb (base form)',
        examples: [
          { en: 'It may rain today.', ku: 'دبیت ئەڤرۆ باران بباریت.' },
          { en: 'I might go to the cinema tonight.', ku: 'دبیت ئەز ئەڤ شەڤە بچمە سینەمایێ.' }
        ],
        notes: [
          '(May) هندەکێ ژ (Might) ب هێزترە.',
          'بۆ داخوازکرنا مۆلەتێ ژی بکار دهێت، وەکی: May I come in?'
        ]
      }
    ]
  },
  {
    id: 'both-either-neither',
    title: 'Both, Either, Neither',
    titleKurdish: 'هەردوو، ئێک ژ وان، چ نینە',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەڤ پەیڤە دهێنە بکارئینان دەمێ ئەم بەحسێ دوو تشتان یان دوو کەسان دکەین.',
        structure: 'Both (هەردوو), Either (ئێک ژ وان), Neither (چ ژ وان نینە)',
        examples: [
          { en: 'Both Ahmed and Ali are here.', ku: 'هەردوو ئەحمەد و عەلی ل لێرەن.' },
          { en: 'I don\'t like either of them.', ku: 'ئەز حەز ژ چ ژ وان ناکەم.' },
          { en: 'Neither of the cars is cheap.', ku: 'چ ژ وان ترۆمبێلان نە یا ئەرزانە.' }
        ],
        notes: [
          '(Both) هەر دەم دگەل (and) دهێت.',
          '(Either) دگەل (or) دهێت.',
          '(Neither) دگەل (nor) دهێت.'
        ]
      }
    ]
  },
  {
    id: 'each-every',
    title: 'Each and Every',
    titleKurdish: 'هەر ئێک و هەمی (Each and Every)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم ڤان پەیڤان بکار دئینین بۆ ئاخفتنێ ل سەر هەر ئەندامەکێ کۆمەکێ ب شێوەیەکێ جودا.',
        structure: 'Each / Every + Singular Noun',
        examples: [
          { en: 'Each student has a book.', ku: 'هەر قوتابیەکێ پەرتووکەک یا هەین.' },
          { en: 'I go to the gym every day.', ku: 'ئەز هەر ڕۆژ دچمە جیمێ.' }
        ],
        notes: [
          '(Each) پتر بۆ کۆمێن بچیک بکار دهێت.',
          '(Every) پتر بۆ کۆمێن مەزن و گشتی بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'prepositions-place',
    title: 'Prepositions of Place',
    titleKurdish: 'ئامرازێن جهی (In, At, On)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ دیارکرنا جهێ تشتان یان کەسان.',
        structure: 'In (Inside), On (Surface), At (Specific Point)',
        examples: [
          { en: 'In the room / In London', ku: 'د ژوورێ دا / ل لەندەن' },
          { en: 'On the table / On the wall', ku: 'ل سەر مێزێ / ل سەر دیوارێ' },
          { en: 'At the bus stop / At the door', ku: 'ل وێستگەها پاسێ / ل بەر دەرگەهی' }
        ],
        notes: [
          '(In) بۆ جهێن گرتى و باژێڕان بکار دهێت.',
          '(On) بۆ سەر ڕوویێ تشتان بکار دهێت.',
          '(At) بۆ خالەکا دیارکری بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'conditionals-3',
    title: 'Third Conditional',
    titleKurdish: 'مەرجێ سێیێ (Third Conditional)',
    category: 'Conditionals (مەرج)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ ئاخفتنێ ل سەر تشتەکێ کو ل ڕابردوویدا ڕوو نەدایە، و ئەم خەیالا ئەنجامەکێ جودا دکەین.',
        structure: 'If + Past Perfect, would have + Verb (3rd form)',
        examples: [
          { en: 'If I had studied harder, I would have passed the exam.', ku: 'ئەگەر من ب باشتر خویندبا، دا د ئەزموونێ دا سەرکەڤم (بەلێ من ب باشی نەخویند و ئەز سەرنەکەفتم).' },
          { en: 'If we had left earlier, we would have caught the train.', ku: 'ئەگەر ئەم زووتر چووباین، دا بگەهینە شەمەندەفەرێ.' }
        ],
        notes: [
          'ئەڤە بۆ تشتێن ڕابردوو یێن کو نەهاتینە گوهۆڕین بکار دهێت.',
          'هەر دەم خەیالە ل سەر ڕابردووی.'
        ]
      }
    ]
  },
  {
    id: 'wish-if-only',
    title: 'Wish and If only',
    titleKurdish: 'هیڤی و خۆزیک (Wish and If only)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'ئەم (Wish) بکار دئینین بۆ دەربڕینا داخوازەکێ کو ئەم بڤێین تشتەک ل دەمێ نوکە یان ڕابردوو یێ جودا با.',
        structure: 'Subject + wish + Past Simple / Past Perfect',
        examples: [
          { en: 'I wish I had a car.', ku: 'خۆزیکێن من ترۆمبێلەک هەبا (بەلێ نوکە نینە).' },
          { en: 'I wish I hadn\'t eaten so much.', ku: 'خۆزیکێن من ئەوقاس نەخواربا (بەلێ من یا خوارى).' }
        ],
        notes: [
          'بۆ هیڤیێن نوکە، دەمێ بۆری یێ سادە بکار دئینین.',
          'بۆ پەشیمانیێ ل سەر ڕابردووی، دەمێ بۆری یێ تەمام بکار دئینین.'
        ]
      }
    ]
  },
  {
    id: 'have-to-must',
    title: 'Have to and Must',
    titleKurdish: 'نەچاری (Have to and Must)',
    category: 'Modals (فعلێن هاریکار)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'هەردوو بۆ نەچاریێ بکار دهێن، بەلێ جوداهیەکا بچیک یا د ناڤبەرا وان دا هەین.',
        structure: 'Subject + have to / must + Verb (base form)',
        examples: [
          { en: 'I have to wear a uniform at work.', ku: 'پێدڤی یە ئەز جلکێن فرمی ل سەر کار بپۆشم (قانوونە).' },
          { en: 'I must call my mother tonight.', ku: 'پێدڤی یە ئەز ئەڤ شەڤە تەلەفۆنێ بۆ دایکا خۆ بکەم (بڕیارا منە).' }
        ],
        notes: [
          '(Have to) پتر بۆ قانوون و تشتێن ژ دەرڤە بکار دهێت.',
          '(Must) پتر بۆ هەستێن کەسی و بڕیارێن ناڤخۆیی بکار دهێت.'
        ]
      }
    ]
  },
  {
    id: 'linking-words',
    title: 'Linking Words',
    titleKurdish: 'پەیڤێن گرێدانێ (Although, Despite, etc.)',
    category: 'Advanced (پێشکەفتی)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ گرێدانا دوو بیرۆکێن جودا یان بەروڤاژی هەڤدوو.',
        structure: 'Although + Clause / Despite + Noun or -ing',
        examples: [
          { en: 'Although it was raining, we went out.', ku: 'هەرچەندە باران دەبارى، ئەم چوونە دەرڤە.' },
          { en: 'Despite the rain, we went out.', ku: 'سەرەڕای بارانێ، ئەم چوونە دەرڤە.' }
        ],
        notes: [
          'پشتی (Although) ڕستەکا تەمام دهێت.',
          'پشتی (Despite) تەنێ ناڤ یان فعلەکا (ing) دهێت.'
        ]
      }
    ]
  },
  {
    id: 'quantifiers',
    title: 'Quantifiers',
    titleKurdish: 'پەیڤێن چەندایەتیێ (All, Most, Some, Any)',
    category: 'Basics (بنیات)',
    content: [
      {
        rule: 'بکارئینان (Usage)',
        explanation: 'بۆ دیارکرنا بڕ و چەندایەتیا تشتان.',
        structure: 'All (100%), Most (80%), Some (50%), Any (?), No/None (0%)',
        examples: [
          { en: 'All students passed the exam.', ku: 'هەمی قوتابی د ئەزموونێ دا سەرکەفتن.' },
          { en: 'Do you have any questions?', ku: 'ئەرێ چ پسیارێن تە هەین؟' },
          { en: 'I have no money.', ku: 'چ پارە ل دەف من نینن.' }
        ],
        notes: [
          '(Some) پتر بۆ ڕستێن موجەب بکار دهێت.',
          '(Any) پتر بۆ پسیار و ڕستێن سالبی بکار دهێت.'
        ]
      }
    ]
  }
];
