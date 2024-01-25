const SERVER_IP = 'http://192.168.31.12/';
const SERVER_HOME = SERVER_IP + 'Sanketi Website/' ;
const SERVER_DATA = SERVER_HOME + 'data/';
const SERVER_DATA_IMAGES = SERVER_DATA + 'Images/';
const SERVER_DATA_AUDIO = SERVER_DATA + 'Audio/';
const SERVER_DATA_AUDIO_ESSAY = SERVER_DATA_AUDIO + 'Essay/';
const SERVER_DATA_AUDIO_LESSONS = SERVER_DATA_AUDIO + 'Lessons/';
const SERVER_IMAGE_SPEAKER = 'Speaker.png';
const SERVER_IMAGE_KEYBOARD = 'Keyboard.png';

const Num_Alphabets = 26;
const NUM_WORDS_PER_PAGE = 90;
const NUM_WORDS_PER_COLUMN = 30;
const NUM_WORDS_PER_PAGE_FOR_MOBILE = 60;
const NUM_WORDS_PER_COLUMN_FOR_MOBILE = 20;
const MAX_PAGINATION = 500;
const MAX_PAGINATION_DISPLAY = 10;
const COLOR_CARAMINE_PINK = "#E74C3C";
const COLOR_LIGHT_PINK = "#FDEDEC" ;
const COLOR_BLUE = "#0000ff" ;
const COLOR_GREEN = "#008000" ;
const MAXIMUM_SAMPLE_SENTENCES_IN_ONE_ALPHABET = 500;
const UPPER_CASE_ASCII_START = 65;
const LOWER_CASE_ASCII_START = 97;

const ROW_ID_COLUMN = 0;
const ENGLISH_WORD_COLUMN = 1 ;  
const KANNADA_WORD_COLUMN_ENGLISH_FONT = 2 ;  
const KANNADA_WORD_COLUMN_KANNADA_FONT = 3 ;  
const BS_WORD_COLUMN_ENGLISH_FONT = 4 ;  
const BS_WORD_COLUMN_KANNADA_FONT = 5 ;  
const AUDIO_BS_WORD = 6 ;  
const KS_WORD_COLUMN_ENGLISH_FONT = 7 ;  
const KS_WORD_COLUMN_KANNADA_FONT = 8 ;  
const AUDIO_KS_WORD = 9 ;  
const LS_WORD_COLUMN_ENGLISH_FONT = 10 ;  
const LS_WORD_COLUMN_KANNADA_FONT = 11 ;  
const AUDIO_LS_WORD = 12 ;  
const MS_WORD_COLUMN_ENGLISH_FONT = 13 ;  
const MS_WORD_COLUMN_KANNADA_FONT = 14 ;  
const AUDIO_MS_WORD = 15 ;  
const SANKETI_WORD_PART_OF_SPEECH = 16 ;  
const SANKETI_WORD_CATEGORY = 17 ;  
const EXAMPLE_SENTENCE_ENGLISH = 18 ;  
const EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT = 19 ;  
const EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT = 20 ;  
const EXAMPLE_SENTENCE_BS_ENGLISH_FONT = 21 ;  
const EXAMPLE_SENTENCE_BS_KANNADA_FONT = 22 ;  
const AUDIO_BS_EXAMPLE_SENTENCE = 23 ;  
const EXAMPLE_SENTENCE_KS_ENGLISH_FONT = 24 ;  
const EXAMPLE_SENTENCE_KS_KANNADA_FONT = 25 ;  
const AUDIO_KS_EXAMPLE_SENTENCE = 26 ;  
const EXAMPLE_SENTENCE_LS_ENGLISH_FONT = 27 ;  
const EXAMPLE_SENTENCE_LS_KANNADA_FONT = 28 ;  
const AUDIO_LS_EXAMPLE_SENTENCE = 29 ;  
const EXAMPLE_SENTENCE_MS_ENGLISH_FONT = 30 ;  
const EXAMPLE_SENTENCE_MS_KANNADA_FONT = 31 ;  
const AUDIO_MS_EXAMPLE_SENTENCE = 32 ;  

const ENGLISH_WORD_COLUMN_NAME = "English (ಆಂಗ್ಲ)" ;  
const KANNADA_WORD_COLUMN_ENGLISH_FONT_NAME = "Kannada_in_english (ಕನ್ನಡ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const KANNADA_WORD_COLUMN_KANNADA_FONT_NAME = "Kannada_in_kannada (ಕನ್ನಡ_ಕನ್ನಡದಲ್ಲಿ)" ;  
const BS_WORD_COLUMN_ENGLISH_FONT_NAME = "BS_in_english (ಬೆಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const BS_WORD_COLUMN_KANNADA_FONT_NAME = "BS_in_kannada (ಬೆಸಂ_ಕನ್ನಡದಲ್ಲಿ)" ;  
const AUDIO_BS_WORD_NAME = "BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)" ;  
const KS_WORD_COLUMN_ENGLISH_FONT_NAME = "KS_in_english (ಕೌಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const KS_WORD_COLUMN_KANNADA_FONT_NAME = "KS_in_kannada (ಕೌಸಂ_ಕನ್ನಡದಲ್ಲಿ)" ;  
const AUDIO_KS_WORD_NAME = "KS_Audio (ಕೌಸಂ_ಆಡಿಯೊ)" ;  
const LS_WORD_COLUMN_ENGLISH_FONT_NAME = "LS_in_english (ಲಿಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const LS_WORD_COLUMN_KANNADA_FONT_NAME = "LS_in_kannada (ಲಿಸಂ_ಕನ್ನಡದಲ್ಲಿ)" ;  
const AUDIO_LS_WORD_NAME = "LS_Audio (ಲಿಸಂ_ಆಡಿಯೊ)" ;  
const MS_WORD_COLUMN_ENGLISH_FONT_NAME = "MS_in_english (ಮಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const MS_WORD_COLUMN_KANNADA_FONT_NAME = "MS_in_kannada (ಮಸಂ_ಕನ್ನಡದಲ್ಲಿ)" ;  
const AUDIO_MS_WORD_NAME = "MS_Audio (ಮಸಂ_ಆಡಿಯೊ)" ;  
const SANKETI_WORD_PART_OF_SPEECH_NAME = "Part_of_speech (ಪದ ವಿಭಾಗ)" ;  
const SANKETI_WORD_CATEGORY_NAME = "Category (ವರ್ಗ)" ;  
const EXAMPLE_SENTENCE_ENGLISH_NAME = "Sentence_english (ಉದಾಹರಣೆ_ಆಂಗ್ಲಾದಲ್ಲಿ)" ;  
const EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT_NAME = "Sentence_kannada_in_english (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಆಂಗ್ಲ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT_NAME = "Sentence_kannada_in_kannada (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಕನ್ನಡ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_BS_ENGLISH_FONT_NAME = "Sentence_BS_in_english (ಉದಾಹರಣೆ_ಬೆಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_BS_KANNADA_FONT_NAME = "Sentence_BS_in_kannada (ಉದಾಹರಣೆ_ಬೆಸಂ_ಕನ್ನಡ ಲಿಪಿ)" ;  
const AUDIO_BS_EXAMPLE_SENTENCE_NAME = "Sentence_BS_Audio (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಬೆಸಂ)" ;  
const EXAMPLE_SENTENCE_KS_ENGLISH_FONT_NAME = "Sentence_KS_in_english (ಉದಾಹರಣೆ_ಕೌಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_KS_KANNADA_FONT_NAME = "Sentence_KS_in_kannada (ಉದಾಹರಣೆ_ಕೌಸಂ_ಕನ್ನಡ ಲಿಪಿ)" ;  
const AUDIO_KS_EXAMPLE_SENTENCE_NAME = "Sentence_KS_Audio (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಕೌಸಂ)" ;  
const EXAMPLE_SENTENCE_LS_ENGLISH_FONT_NAME = "Sentence_LS_in_english (ಉದಾಹರಣೆ_ಲಿಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_LS_KANNADA_FONT_NAME = "Sentence_LS_in_kannada (ಉದಾಹರಣೆ_ಲಿಸಂ_ಕನ್ನಡ ಲಿಪಿ)" ;  
const AUDIO_LS_EXAMPLE_SENTENCE_NAME = "Sentence_LS_Audio (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಲಿಸಂ)" ;  
const EXAMPLE_SENTENCE_MS_ENGLISH_FONT_NAME = "Sentence_MS_in_english (ಉದಾಹರಣೆ_ಮಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)" ;  
const EXAMPLE_SENTENCE_MS_KANNADA_FONT_NAME = "Sentence_MS_in_kannada (ಉದಾಹರಣೆ_ಮಸಂ_ಕನ್ನಡ ಲಿಪಿ)" ;  
const AUDIO_MS_EXAMPLE_SENTENCE_NAME = "Sentence_MS_Audio (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಮಸಂ)" ;  

const BASE_AUDIO_FOLDER = "./Audio/";
const AUDIO_FOLDER_SAMPLE_SENTENCES_BS = "Sanketi sentences";
const AUDIO_FOLDER_DICTIONARY_WORDS_BS = "Sanketi words";
const AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS = "Examples";
const AUDIO_FOLDER_LESSONS = "Lessons";
const AUDIO_FOLDER_SAMPLE_SENTENCES_KANNADA_BS = "./DrAiÉÆ/¸ÀAPÉÃw ¸ÉAmÉA¸À¸ï";
const AUDIO_FOLDER_DICTIONARY_WORDS_KANNADA_BS = "./DrAiÉÆ/¸ÀAPÉÃw ªÀqïìð ¥ÀzÀUÀ½UÉ ºÁUÀÄ ./DrAiÉÆ/JPÁìA¥À¯ïì GzÁºÀgÀuÉ ªÁPÀåUÀ½UÉ" ;
const SAVED_FILE_INSTRUCTION_ENGLISH = "Extract the audio.zip file (if it has been downloaded) into the current folder i.e where this file is present. The audio files after extraction should be available in the ";
const SAVED_FILE_INSTRUCTION_KANNADA = "ಆಡಿಯೊ ಜಿ಼ಪ್ ಫೈಲ್ (ಇಳಿಸಿಕೊಂಡಿದ್ದರೆ) ನಿಂದ ಎಲ್ಲ ಫೈಲುಗಳನ್ನು ನಿಮ್ಮ ಸಧ್ಯದಲ್ಲಿರುವ ಫೋ಼ಳ್ಡರ್ ಗೆ ವರ್ಗಾಯಿಸಿಕೊಳ್ಳಿ. ಎಲ್ಲ ಆಡಿಯೊ ಫೈಲುಗಳು ಈ ಕೆಳಕಂಡ ಫೋ಼ಳ್ಡರ್ ನಲ್ಲಿ ಇರಬೇಕು - ./ಆಡಿಯೊ/ಸಂಕೇತಿ ವರ್ಡ್ಸ್ ಪದಗಳಿಗೆ ಹಾಗು ./ಆಡಿಯೊ/ಎಗ್ಸಾಂಪಲ್ಸ್ ಉದಾಹರಣೆ ವಾಕ್ಯಗಳಿಗೆ" ;
const SAMPLE_SENTENCES_INSTRUCTION_ENGLISH = SAVED_FILE_INSTRUCTION_ENGLISH + BASE_AUDIO_FOLDER + AUDIO_FOLDER_SAMPLE_SENTENCES_BS + " folder" + "\r\n" ;
const SAMPLE_SENTENCES_INSTRUCTION_KANNADA = SAVED_FILE_INSTRUCTION_KANNADA + AUDIO_FOLDER_SAMPLE_SENTENCES_KANNADA_BS + "\r\n";
const DICTIONARY_WORDS_INSTRUCTION_ENGLISH = SAVED_FILE_INSTRUCTION_ENGLISH + BASE_AUDIO_FOLDER + AUDIO_FOLDER_DICTIONARY_WORDS_BS + " folder for words and in " + BASE_AUDIO_FOLDER +  AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS + " folder for example sentences" + "\r\n" ;
const DICTIONARY_WORDS_INSTRUCTION_KANNADA = SAVED_FILE_INSTRUCTION_KANNADA + "\r\n";
const LARGE_SCREEN_WIDTH = 1500;

const BETTADAPURA_SANKETI = "BS";
const KAUSHIKA_SANKETI = "KS";
const LINGADAHALLI_SANKETI = "LS";
const MATTUR_SANKETI = "MS";
const BETTADAPURA_SANKETI_INDEX = 0;
const KAUSHIKA_SANKETI_INDEX = 1;
const LINGADAHALLI_SANKETI_INDEX = 2;
const MATTUR_SANKETI_INDEX = 3;

const CATEGORIES =
[
   "Activity (ಚಟುವಟಿಕೆ)",
   "Animal (ಪ್ರಾಣಿ)",
   "Body (ದೇಹ)",
   "Clause (ನುಡಿಗಟ್ಟು)",
   "Clothing (ಬಟ್ಟೆ)",
   "Colour (ಬಣ್ಣ)",
   "Conversation (ಸಂಭಾಷಣೆ)",
   "Death (ಸಾವು)",
   "Emotion (ಭಾವ)",
   "Environment (ಪರಿಸರ)",
   "Exclamation (ಉದ್ಗಾರ)",
   "Flower (ಹೂವು)",
   "Food (ತಿನಿಸು)",
   "Fruit (ಹಣ್ಣು)",
   "Game (ಆಟ)",
   "House (ಮನೆ)",
   "Instrument (ವಾದ್ಯ)",
   "Knowledge (ವಿದ್ಯೆ)",
   "Marriage (ಮದುವೆ)",
   "Measure (ಅಳತೆ)",
   "Money (ದುಡ್ಡು)",
   "Number (ಅಂಕಿ)",
   "Person (ವ್ಯಕ್ತಿ)",
   "Place (ಸ್ಥಳ)",
   "Plant (ಗಿಡ)",
   "Quality (ಗುಣಮಟ್ಟ)",
   "Relation (ಸಂಬಂಧ)",
   "Spiritual (ಆಧ್ಯಾತ್ಮ)",
   "Thing (ವಸ್ತು)",
   "Time (ಕಾಲ)",
   "Vegetable (ತರಕಾರಿ)",
   "Vehicle (ವಾಹನ)"
];

const TITLE_SANKETI_IN_ENGLISH_FONT = "Bettadapura Sanketi (in English font) (ಬೆಟ್ಟದಪುರ ಸಂಕೇತಿ (ಇಂಗ್ಲಿಶ್ ಲಿಪಿಯಲ್ಲಿ))";
const TITLE_SANKETI_IN_KANNADA_FONT = "Bettadapura Sanketi (in Kannada font) (ಬೆಟ್ಟದಪುರ ಸಂಕೇತಿ (ಕನ್ನಡ ಲಿಪಿಯಲ್ಲಿ))";
const TITLE_KANNADA = "Kannada Translation (ಕನ್ನಡ ಅನುವಾದ)";
const TITLE_ENGLISH = "English Translation (ಇಂಗ್ಲಿಶ್ ಅನುವಾದ)";

const ESSAY_LIST =
[
  ["Makara Sankraanti", "(ಮಕರ ಸಂಕ್ರಾಂತಿ)", "S.G. Krishnamurthy", "(ಎಸ್.ಜಿ. ಕೃಷ್ಣಮೂರ್ತಿ)", "Feb 2022", "(ಫೆ಼ಬ್ ೨೦೨೨)"]    
];

const ESSAY_LIST_MAKARA_SANKRANTI_SANKETI_IN_ENGLISH_FONT = "sankraanti habbattuLLe aLLi beeraanne. karat aLLi daano vankyOrdaagDi kuDakardaagDi heenaayo paTkOnne.attakke oru baDa alankaaro paNNi (shippe vaangyuTTi haLatte aLLi paNNi) kuDaanne. kartaLLi daano kuDkardi anDaaka enD mEle ikkara kaTTa grahatte, kaaTatte innotrakki hastaantaro paNNapDi. Aanaaka inge ottarakki ottaru kuDakartinno dOsho haranj pOrle, angange iraandi. aLLe beerardi, shee panchkyanDapDi - nambDe preetitEgDe jotEle - idee ishTamaana kaaryo. \n kart aLL badlu haLatte aLLi kuDaanne. itte iShTattinno ellaaruu ankyOnne. aLL jotEle karambi, sakkare achchi, sakkare gombegaLanne kuDaanne. paNNi phaLatte, kopri paadi, kusari kaaLi ittellaatyuu shErichchuTTi kuDaanne. karta aLLe apDi haLat paNradi ? aLLe apDE ujjanaaka aagarle. mudlu atte neeruLLe nanch vayyaanne. shippEye ippo sulabhamaa ujyuTTi vaangla. kal mEle ujji neraLuLLe uNti aaraaki vachchi atna mEle kuunuLLe vechchane paNNaanne, poriyaanne, poTTe paDchuTTi vaangaanne. ippo gharamaagharam haLat aLLi siddho aachi. poragaDlEye kuunuLLe porachuTTi shEripyaanne. paak katri uLLe vellatte puDi paNNi saNNa saNNa paraLagaLe paNNi kuuDipyaanne. kaDlekaayi virEye porachuTTi poTTe paDchuTTi kaaLe shEripyaanne. koppareeye saNNa saNNee tunDagaLa pOle kattarichchuTTi shEripyaanne. kusari kaaLi idella shEripeela. ippo ghanamaan aLLi aayTi vandi, reDi aachi. beerango ! kalle beerango anDi, aLLe beerango. habbatte sambhramo paDango. aLLi khanDa ruchiya iraandi. ONmaanatne proTeen shikkaandi. tailamuu uDambakki yathEchchama shEraandi. chaLigaalatakki sariyaana upaayo. \n sankraanti habbatte aakarshaNe inno kaaNaanne. suuryo inDi dakShiNatinno uttara dikkakki tanDe OTatte shuru paNNaandi. asat inno satyatte kaDEki prayaaNo pOdama. \n paijaakLakkantuu santoShamE santOSho. aNNe neeraTkyanDu, pudu baTTe iTkanDu, puuje paNNi, habbatte chuuTu chuuDi, aaDaanne, aLLe panchaanne, saapDaanne.\nsankraantiye oru satti vaignaanikama adhyayano paNdama. ind habbo chaLi gaaltuLLe vaaraandi. uDumbuLLe uShNaamsho kammi aayTuTTi charmo tanDe mrudutvatte kaLanjganDiraandi. ittinno charmo OrOre khaaylegLakki tuttaagaandi. jalaamshatte aLate samamma ikrapDi paatkONu. paayar parpatte pongal itte sari paNNaaki sahaayo paNNaandi. aLLi vellange kuuDa upayuktamaa iraandi. nambe vankyOra aahaarattuLLe kaalshium, sODium, poTaashium, prOteen amsho jaasti iraandi. narangLe balo paNNaandi. uDumbuLLe kaanti vaaraandi. rakta vardhako kuuDa. paijaakLakki yagachi phaLatte abhiShEko paNNaanne. aarati yattaanne.\nsuuryanE inde prapanchatte jeeva jantugLakki aadhaaro. attinno maLe vaaraandi. pairi pachche voLyaandi. varSho puurti kriShi uLLe raito kaShTo paTTi pair voLanjiraandi. ippo attanDe shramatakki phalamaayTi kaNajo rambaandi. suuryanakki krutagnyate kaaTaaki inde habbo. polangLuLLe pongal paNNi dinamaNiki arpipyaanne. raito tanaki sahaayo paNNina pashu yaradangLe uDambi kaLvi, nalli aahaaro kuDti, alankaaro paNNaanne. kich paaripyaanne. arshi maave neeruLLe kadaryuTTi attinno vaNNatte rangOle alankaaratte haat munteele paNNaanne. ellaa santOSho sambhramatinno iraanne. idi oru vidhatuLLe nisargatte puuje. suuryaninno engLakki agatyamaan shaakho neeri maLe ruuptuLLe shikkaandi.\nmanuShyanDe aar maaso dEvatEgDe oru pagli. adi uttaraayaNo. svargatte vaadli ippo tarvaandi. vaikunTha Ekaadashi uLLe svargattuLLe ikkara paramaatmanakki namano, praarthane. ippo makara sankraanti. ipDiyE dakShiNaayaNatte aar maaso dEvatEgDe oru raatri. in aar maastakki karkaaTaka sankraanti. appo onDuu vishESho ille. uttaraayaNatuLLe pagal jaasti, raatri kammi. hinduugDe habbangellaa chandranDe chalane mEle nishchayamaairaandi. ugaadi chaitra maasatte mudlaa naa. bhaadrapada chauti uLLe gaNEshanDe habbo. kaartik maaso prathamo deepaavaLi. idellaa shukla pakShattuLLe vardi. ind habbange and naa ONmaanaaluu appovONmaanaaluuve varla. aanaaka sankraanti maatro nishchitamaa padanaalaa taareekhe (aparuuptakki padananja naaLuu varla). paramaatmo prasannanaayTuTTi lOktakkellaa kShEmo samrudhdhi dayapaalipyaandi.";

const ESSAY_LIST_MAKARA_SANKRANTI_SANKETI_IN_KANNADA_FONT = "ಸಂಕ್ರಾಂತಿ ಹಬ್ಬತ್ತುಳ್ಳೆ ಅಳ್ಳಿ ಬೀರಾನ್ನೆ. ಕರತ್ ಅಳ್ಳಿ ದಾನೊ ವಂಕ್ಯೋರ್ದಾಕ್ಡಿ ಕುಡಕರ್ದಾಕ್ಡಿ ಹೀನಾಯೊ ಪಟ್ಕೋನ್ನೆ. ಅತ್ತಕ್ಕೆ ಒರು ಬಡ ಅಲಂಕಾರೊ ಪಣ್ಣಿ (ಶಿಪ್ಪೆ ವಾಂಗ್ಯುಟ್ಟಿ ಹಳತ್ತೆ ಅಳ್ಳಿ ಪಣ್ಣಿ) ಕುಡಾನ್ನೆ. ಕರ್ತಳ್ಳಿ ದಾನೊ ಕುಡ್ಕರ್ದಿ ಅಂಡಾಕ ಎಂಡ್ ಮೇಲೆ ಇಕ್ಕರ ಕಟ್ಟ ಗ್ರಹತ್ತೆ , ಕಾಟತ್ತೆ ಇನ್ನೊತ್ರಕ್ಕಿ ಹಸ್ತಾಂತರೊ ಪಣ್ಣಪ್ಡಿ. ಆನಾಕ ಇಂಗೆ ಒತ್ತರಕ್ಕಿ ಒತ್ತರು ಕುಡಕರ್ತಿನ್ನೊ ದೋಷೊ ಹರಂಜ್ ಪೋರ್ಲೆ, ಅಂಗಂಗೆ ಇರಾಂದಿ. ಅಳ್ಳೆ ಬೀರರ್ದಿ, ಶೀ ಪಂಚ್ಕ್ಯಂಡಪ್ಡಿ - ನಂಬ್ಡೆ ಪ್ರೀತಿತೇಗ್ಡೆ ಜೊತೇಲೆ - ಇದೀ ಇಷ್ಟಮಾನ ಕಾರ್ಯೊ. \ಟಿ ಕರ್ತ್ ಅಳ್ಳ್ ಬದ್ಲು ಹಳತ್ತೆ ಅಳ್ಳಿ ಕುಡಾನ್ನೆ. ಇತ್ತೆ ಇಷ್ಟತ್ತಿನ್ನೊ ಎಲ್ಲಾರೂ ಅಂಕ್ಯೋನ್ನೆ. ಅಳ್ಳ್ ಜೊತೇಲೆ ಕರಂಬಿ, ಸಕ್ಕರೆ ಅಚ್ಚಿ, ಸಕ್ಕರೆ ಗೊಂಬೆಗಳನ್ನೆ ಕುಡಾನ್ನೆ. ಪಣ್ಣಿ ಫಳತ್ತೆ , ಕೊಪ್ರಿ ಪಾದಿ, ಕುಸರಿ ಕಾಳಿ ಇತ್ತೆಲ್ಲಾತ್ಯೂ ಶೇರಿಚ್ಚುಟ್ಟಿ ಕುಡಾನ್ನೆ. ಕರ್ತ ಅಳ್ಳೆ ಅಪ್ಡಿ ಹಳತ್ ಪಣ್ರದಿ ? ಅಳ್ಳೆ ಅಪ್ಡೇ ಉಜ್ಜನಾಕ ಆಗರ್ಲೆ. ಮುದ್ಲು ಅತ್ತೆ ನೀರುಳ್ಳೆ ನಂಚ್ ವಯ್ಯಾನ್ನೆ. ಶಿಪ್ಪೇಯೆ ಇಪ್ಪೊ ಸುಲಭಮಾ ಉಜ್ಯುಟ್ಟಿ ವಾಂಗ್ಲ. ಕಲ್ ಮೇಲೆ ಉಜ್ಜಿ ನೆರಳುಳ್ಳೆ ಉಣ್ತಿ ಆರಾಕಿ ವಚ್ಚಿ ಅತ್ನಮೇಲೆ ಕೂನುಳ್ಳೆ ವೆಚ್ಚನೆ ಪಣ್ಣಾನ್ನೆ, ಪೊರಿಯಾನ್ನೆ, ಪೊಟ್ಟೆ ಪಡ್ಚುಟ್ಟಿ ವಾಂಗಾನ್ನೆ. ಇಪ್ಪೊ ಘರಮಾಘರಂ ಹಳತ್ ಅಳ್ಳಿ ಸಿದ್ಧೊ ಆಚಿ. ಪೊರಗಡ್ಲೇಯೆ ಕೂನುಳ್ಳೆ ಪೊರಚುಟ್ಟಿ ಶೇರಿಪ್ಯಾನ್ನೆ. ಪಾಕ್ ಕತ್ರಿ ಉಳ್ಳೆ ವೆಲ್ಲತ್ತೆ ಪುಡಿ ಪಣ್ಣಿ ಸಣ್ಣ ಸಣ್ಣ ಪರಳಗಳೆ ಪಣ್ಣಿ ಕೂಡಿಪ್ಯಾನ್ನೆ. ಕಡ್ಲೆಕಾಯಿ ವಿರೇಯೆ ಪೊರಚುಟ್ಟಿ, ಪೊಟ್ಟೆ ಪಡ್ಚುಟ್ಟಿ ಕಾಳೆ ಶೇರಿಪ್ಯಾನ್ನೆ. ಕೊಪ್ಪರೀಯೆ ಸಣ್ಣ ಸಣ್ಣೀ ತುಂಡಗಳ ಪೋಲೆ ಕತ್ತರಿಚ್ಚುಟ್ಟಿ ಶೇರಿಪ್ಯಾನ್ನೆ. ಕುಸರಿ ಕಾಳಿ ಇದೆಲ್ಲ ಶೇರಿಪೀಲ. ಇಪ್ಪೊ ಘನಮಾನ್ ಅಳ್ಳಿ ಆಯ್ಟಿ ವಂದಿ, ರೆಡಿ ಆಚಿ. ಬೀರಂಗೊ ! ಕಲ್ಲೆ ಬೀರಂಗೊ ಅಂಡಿ, ಅಳ್ಳೆ ಬೀರಂಗೊ. ಹಬ್ಬತ್ತೆ ಸಂಭ್ರಮೊ ಪಡಂಗೊ. ಅಳ್ಳಿ ಖಂಡ ರುಚಿಯ ಇರಾಂದಿ. ಓಣ್ಮಾನತ್ನೆ ಪ್ರೋಟೀನ್ ಶಿಕ್ಕಾಂದಿ. ತೈಲಮೂ ಉಡಂಬಕ್ಕಿ ಯಥೇಚ್ಚಮ ಶೇರಾಂದಿ. ಚಳಿಗಾಲತಕ್ಕಿ ಸರಿಯಾನ ಉಪಾಯೊ. \ಟಿ ಸಂಕ್ರಾಂತಿ ಹಬ್ಬತ್ತೆ ಆಕರ್ಶಣೆಯಿನ್ನೊ ಕಾಣಾನ್ನೆ. ಸೂರ್ಯೊ ಇಂಡಿ ದಕ್ಷಿಣತಿನ್ನೊ ಉತ್ತರ ದಿಕ್ಕಕ್ಕಿ ತಂಡೆ ಓಟತ್ತೆ ಶುರು ಪಣ್ಣಾಂದಿ. ಅಸತ್ ಇನ್ನೊ ಸತ್ಯತ್ತೆ ಕಡೇಕಿ ಪ್ರಯಾಣೊ ಪೋದಮ. \ಟಿ ಪೈಜಾಕ್ಳಕ್ಕಂತೂ ಸಂತೋಷಮೇ ಸಂತೋಷೊ. ಅಣ್ಣೆ ನೀರಟ್ಕ್ಯಂಡು ಪುದು ಬಟ್ಟೆ ಇಟ್ಕಂಡು, ಪೂಜೆ ಪಣ್ಣಿ, ಹಬ್ಬತ್ತೆ ಚೂಟು ಚೂಡಿ, ಆಡಾನ್ನೆ, ಅಳ್ಳೆ ಪಂಚಾನ್ನೆ, ಸಾಪ್ಡಾನ್ನೆ.\ಟಿಸಂಕ್ರಾಂತಿಯೆ ಒರು ಸತ್ತಿ ವೈಙÁ್ಞನಿಕಮ ಅಧ್ಯಯನೊ ಪಣ್ದಮ. ಇಂದ್ ಹಬ್ಬೊ ಚಳಿಗಾಲ್ತುಳ್ಳೆ ವಾರಾಂದಿ. ಉಡುಂಬುಳ್ಳೆ ಉಷ್ಣಾಂಶೊ ಕಮ್ಮಿ ಆಯ್ಟುಟ್ಟಿ ಚರ್ಮೊ ತಂಡೆ ಮೃದುತ್ವತ್ತೆ ಕಳಂಜ್ಗಂಡಿರಾಂದಿ. ಇತ್ತಿನ್ನೊ ಚರ್ಮೊ ಓರೋರೆ ಖಾಯ್ಲೆಗ್ಳಕ್ಕಿ ತುತ್ತಾಗಾಂದಿ. ಜಲಾಂಶತ್ತೆ ಅಳತೆ ಸಮಮ್ಮ ಇಕ್ರಪ್ಡಿ ಪಾತ್ಕೋಣು. ಪಾಯರ್ ಪರ್ಪತ್ತೆ ಪೊಂಗಲ್ ಇತ್ತೆ ಸರಿ ಪಣ್ಣಾಕಿ ಸಹಾಯೊ ಪಣ್ಣಾಂದಿ. ಅಳ್ಳಿ ವೆಲ್ಲಂಗೆ ಕೂಡ ಉಪಯುಕ್ತಮಾ ಇರಾಂದಿ. ನಂಬೆ ವಂಕ್ಯೋರ ಆಹಾರತ್ತುಳ್ಳೆ ಕಾಲ್ಶಿಯಂ, ಸೋಡಿಯಂ, ಪೊಟಾಶಿಯಂ, ಪ್ರೋಟೀನ್ ಅಂಶೊ ಜಾಸ್ತಿ ಇರಾಂದಿ. ನರಂಗ್ಳೆ ಬಲೊ ಪಣ್ಣಾಂದಿ. ಉಡುಂಬುಳ್ಳೆ ಕಾಂತಿ ವಾರಾಂದಿ. ರಕ್ತ ವರ್ಧಕೊ ಕೂಡ. ಪೈಜಾಕ್ಳಕ್ಕಿ ಎಗಚಿ ಫಳತ್ತೆ ಅಭಿಷೇಕೊ ಪಣ್ಣಾನ್ನೆ. ಆರತಿ ಯತ್ತಾನ್ನೆ. \ಟಿಸೂರ್ಯನೇ ಇಂದೆ ಪ್ರಪಂಚತ್ತೆ ಜೀವ ಜಂತುಗ್ಳಕ್ಕಿ ಆಧಾರೊ. ಅತ್ತಿನ್ನೊ ಮಳೆ ವಾರಾಂದಿ. ಪೈರಿ ಪಚ್ಚೆ ವೊಳ್ಯಾಂದಿ. ವರ್ಷೊ ಪೂರ್ತಿ ಕೃಷಿ ಉಳ್ಳೆ ರೈತೊ ಕಷ್ಟೊ ಪಟ್ಟಿ ಪೈರ್ ವೊಳಂಜಿರಾಂದಿ. ಇಪ್ಪೊ ಅತ್ತಂಡೆ ಶ್ರಮತಕ್ಕಿ ಫಲಮಾಯ್ಟಿ ಕಣಜೊ ರಂಬಾಂದಿ. ಸೂರ್ಯನಕ್ಕಿ ಕೃತಙ್ಞತೆ ಕಾಟಾಕಿ ಇಂದೆ ಹಬ್ಬೊ. ಪೊಲಂಗ್ಳುಳ್ಳೆ ಪೊಂಗಲ್ ಪಣ್ಣಿ ದಿನಮಣಿಕಿ ಅರ್ಪಿಪ್ಯಾನ್ನೆ. ರೈತೊ ತನಕಿ ಸಹಾಯೊ ಪಣ್ಣಿನ ಪಶು ಯರದಂಗ್ಳೆ ಉಡಂಬಿ ಕಳ್ವಿ , ನಲ್ಲಿ ಆಹಾರೊ ಕುಡ್ತಿ , ಅಲಂಕಾರೊ ಪಣ್ಣಾನ್ನೆ. ಕಿಚ್ ಪಾರಿಪ್ಯಾನ್ನೆ. ಅರ್ಶಿ ಮಾವೆ ನೀರುಳ್ಳೆ ಕದರ್ಯುಟ್ಟಿ ಅತ್ತಿನ್ನೊ ವಣ್ಣತ್ತೆ ರಂಗೋಲೆ ಅಲಂಕಾರತ್ತೆ ಹಾತ್ ಮುಂತೀಲೆ ಪಣ್ಣಾನ್ನೆ. ಎಲ್ಲಾ ಸಂತೋಷೋ ಸಂಭ್ರಮತಿನ್ನೊ ಇರಾನ್ನೆ. ಇದಿ ಒರು ವಿಧತುಳ್ಳೆ ನಿಸರ್ಗತ್ತೆ ಪೂಜೆ. ಸೂರ್ಯನಿನ್ನೊ ಎಂಗ್ಳಕ್ಕಿ ಅಗತ್ಯಮಾನ್ ಶಾಖೊ ನೀರಿ ಮಳೆ ರೂಪ್ತುಳ್ಳೆ ಶಿಕ್ಕಾಂದಿ. \ಟಿಮನುಷ್ಯಂಡೆ ಆರ್ ಮಾಸೊ ದೇವತೇಗ್ಡೆ ಒರು ಪಗ್ಲಿ. ಅದಿ ಉತ್ತರಾಯಣೊ. ಸ್ವರ್ಗತ್ತೆ ವಾದ್ಲಿ ಇಪ್ಪೊ ತರ್ವಾಂದಿ. ವೈಕುಂಠ ಏಕಾದಶಿ ಉಳ್ಳೆ ಸ್ವರ್ಗತ್ತುಳ್ಳೆ ಇಕ್ಕರ ಪರಮಾತ್ಮನಕ್ಕಿ ನಮನೊ, ಪ್ರಾರ್ಥನೆ. ಇಪ್ಪೊ ಮಕರ ಸಂಕ್ರಾಂತಿ. ಇಪ್ಡಿಯೇ ದಕ್ಷಿಣಾಯಣತ್ತೆ ಆರ್ ಮಾಸೊ ದೇವತೇಗ್ಡೆ ಒರು ರಾತ್ರಿ. ಇನ್ ಆರ್ ಮಾಸ್ತಕ್ಕಿ ಕರ್ಕಾಟಕ ಸಂಕ್ರಾಂತಿ. ಅಪ್ಪೊ ಒಂಡೂ ವಿಶೇಷೊ ಇಲ್ಲೆ. ಉತ್ತರಾಯಣತುಳ್ಳೆ ಪಗಲ್ ಜಾಸ್ತಿ , ರಾತ್ರಿ ಕಮ್ಮಿ. ಹಿಂದೂಗ್ಡೆ ಹಬ್ಬಂಗೆಲ್ಲಾ ಚಂದ್ರಂಡೆ ಚಲನೆ ಮೇಲೆ ನಿಶ್ಚಯಮಾಯಿರಾಂದಿ. ಉಗಾದಿ ಚೈತ್ರ ಮಾಸತ್ತೆ ಮುದ್ಲಾ ನಾ. ಭಾದ್ರಪದ ಚೌತಿವುಳ್ಳೆ ಗಣೇಶಂಡೆ ಹಬ್ಬೊ. ಕಾರ್ತಿಕ್ ಮಾಸೊ ಪ್ರಥಮೊ ದೀಪಾವಳಿ. ಇದೆಲ್ಲಾ ಶುಕ್ಲ ಪಕ್ಷತ್ತುಳ್ಳೆ ವರ್ದಿ. ಇಂದ್ ಹಬ್ಬಂಗೆ ಅಂದ್ ನಾ ಓಣ್ಮಾನಾಲೂ ಅಪ್ಪೊವೋಣ್ಮಾನಾಲೂವೆ ವರ್ಲ. ಆನಾಕ ಸಂಕ್ರಾಂತಿ ಮಾತ್ರೊ ನಿಶ್ಚಿತಮಾ ಪದನಾಲಾ ತಾರೀಖೆ (ಅಪರೂಪ್ತಕ್ಕಿ ಪದನಂಜ ನಾಳೂ ವರ್ಲ). ಪರಮಾತ್ಮೊ ಪ್ರಸನ್ನನಾಯ್ಟುಟ್ಟಿ ಲೋಕ್ತಕ್ಕೆಲ್ಲಾ ಕ್ಷೇಮೊ ಸಮೃದ್ಧಿ ದಯಪಾಲಿಪ್ಯಾಂದಿ.";

const ESSAY_LIST_MAKARA_SANKRANTI_KANNADA = "ಸಂಕ್ರಾಂತಿ ಹಬ್ಬದಲ್ಲಿ ಎಳ್ಳು ಬೀರುತ್ತಾರೆ. ಕಪ್ಪು ಎಳ್ಳು ದಾನ ತೊಗೋಳೋದಾಗ್ಲಿ ಕೊಡೋದಾಗ್ಲಿ ಹೀನಾಯ ಪಟ್ಕೋತಾರೆ. ಅದಕ್ಕೆ ಒಂದು ಸ್ವಲ್ಪ ಅಲಂಕಾರ ಮಾಡಿ (ಸಿಪ್ಪೆ ತೆಗೆದು ಬಿಳಿ ಎಳ್ಳು ಮಾಡಿ) ಕೊಡುತ್ತಾರೆ. ಕಪ್ಪು ಎಳ್ಳು ದಾನ ಕೊಡೋದು ಅಂದರೆ ನನ್ನ ಮೇಲೆ ಇರೋ ಕೆಟ್ಟ ಗ್ರಹಾನ, ಕಾಟಾನ ಇನ್ನೊಬ್ಬರಿಗೆ ಹಸ್ತಾಂತರ ಮಾಡಿದ ಹಾಗೆ. ಆದರೆ ಇಲ್ಲಿ ಒಬ್ಬರಿಗೆ ಒಬ್ಬರು ಕೊಡೋದರಿಂದ ದೋಷ ಹರಿದು ಹೊಗಲ್ಲ, ಅಲ್ಲಲ್ಲೆ ಇರತ್ತೆ. ಎಳ್ಳು ಬೀರೋದು ಸಿಹಿ ಹೊಂಚಿಕೊಂಡಹಾಗೆ - ನಮ್ಮವರ ಪ್ರೀತಿಪಾತ್ರರ ಜೊತೆಯಲ್ಲಿ - ಇದು ಇಷ್ಟವಾದ ಕೆಲಸ.\ಟಿ ಕಪ್ಪು ಎಳ್ಳು ಬದಲು ಬಿಳಿ ಎಳ್ಳು ಕೊಡುತ್ತಾರೆ. ಇದನ್ನ ಇಷ್ಟದಿಂದ ಎಲ್ಲಾರೂ ತೊಗೋತಾರೆ. ಎಳ್ಳು ಜೊತೆಯಲ್ಲಿ ಕಬ್ಬು , ಸಕ್ಕರೆ ಅಚ್ಚು , ಸಕ್ಕರೆ ಗೊಂಬೆಗಳನ್ನ ಕೊಡುತ್ತಾರೆ. ಹಣ್ಣು ಹಂಪಲು, ಕೊಬ್ಬರಿ ಗಿಟಕು, ಕುಸರಿ ಕಾಳು ಇದನ್ನೆಲ್ಲಾ ಸೇರಿಸಿಬಿಟ್ಟು ಕೊಡುತ್ತಾರೆ. ಕಪ್ಪು ಎಳ್ಳನ್ನ ಹೇಗೆ ಬಿಳಿ ಮಾಡೋದು ? ಎಳ್ಳನ್ನ ಹಾಗೆ ಉಜ್ಜಿದರೆ ಆಗಲ್ಲ, ಮೊದಲು ಅದನ್ನ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ ಇಡುತ್ತಾರೆ. ಸಿಪ್ಪೇನ ಈಗ ಸುಲಭವಾಗಿ ಉಜ್ಜಿಬಿಟ್ಟು ತೆಗೀಬಹುದು. ಕಲ್ಲ್ ಮೇಲೆ ಉಜ್ಜಿ ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ಆರಕ್ಕೆ ಇಟ್ಟು ಆಮೇಲೆ ಬಾಣಲೆಯಲ್ಲಿ ಬಿಸಿ ಮಾಡುತ್ತಾರೆ, ಹುರೀತಾರೆ, ಹೊಟ್ಟನ್ನ ಕೇರಿಬಿಟ್ಟು ತೆಗೀತಾರೆ. ಈಗ ಘರಮಾಘರಂ ಬಿಳಿ ಎಳ್ಳು ಸಿದ್ಧ ಆಯಿತು. ಹುರಗಡಲೇನ ಬಾಣಲೆಯಲ್ಲಿ ಹುರಿದುಬಿಟ್ಟು ಸೇರಿಸುತ್ತಾರೆ. ಅಡಕೆ ಕತ್ರಿಯಲ್ಲಿ ಬೆಲ್ಲವನ್ನ ಪುಡಿ ಮಾಡಿ ಸಣ್ಣ ಸಣ್ಣ ಹರಳುಗಳನ್ನ ಮಾಡಿ ಕೂಡಿಸುತ್ತಾರೆ. ಕಡಲೇಕಾಯಿ ಬೀಜಾನ ಹುರಿದುಬಿಟ್ಟು , ಹೊಟ್ಟನ್ನ ಕೇರಿಬಿಟ್ಟು ಕಾಳನ್ನ ಸೇರಿಸುತ್ತಾರೆ. ಕೊಬ್ಬರೀನ ಸಣ್ಣ ಸಣ್ಣ ತುಂಡುಗಳ ಹಾಗೆ ಕತ್ತರಿಸಿಬಿಟ್ಟು ಸೇರಿಸುತ್ತಾರೆ. ಕುಸರಿ ಕಾಳು ಇದೆಲ್ಲ ಸೇರಿಸಬಹುದು. ಈಗ ಘನವಾದ ಎಳ್ಳು ಆಗಿ ಬಂತು, ರೆಡಿ ಆಯಿತು. ಬೀರಿ ! ಕಲ್ಲನ್ನ ಬೀರಿ ಅಲ್ಲ , ಎಳ್ಳನ್ನ ಬೀರಿ. ಹಬ್ಬದ ಸಂಭ್ರಮ ಪಡೆಯಿರಿ. ಎಳ್ಳು ತುಂಬ ರುಚಿಯಾಗಿ ಇರುತ್ತದೆ. ಬೇಕಾದಷ್ಟು ಪ್ರೋಟೀನ್ ಸಿಗತ್ತೆ. ತೈಲಾನೂ ಎಥೇಚ್ಛವಾಗಿ ದೇಹಕ್ಕೆ ಸೇರತ್ತೆ. ಚಳಿಗಾಲಕ್ಕೆ ಸರಿಯಾದ ಉಪಾಯ.\ಟಿ ಸಂಕ್ರಾಂತಿ ಹಬ್ಬವನ್ನ ಆಕರ್ಶಣೆಯಿಂದ ಕಾಣುತ್ತಾರೆ. ಸೂರ್ಯ ಇವತ್ತು ದಕ್ಷಿಣದಿಂದ ಉತ್ತರ ದಿಕ್ಕಿಗೆ ಅವನ ಓಟವನ್ನ ಶುರು ಮಾಡುತ್ತಾನೆ. ಅಸತ್ ಇಂದ ಸತ್ಯದ ಕಡೇಗೆ ಪ್ರಯಾಣ ಹೋಗೋಣ.\ಟಿ ಮಕ್ಕಳಿಗಂತೂ ಸಂತೋಷವೋ ಸಂತೋಷ. ಎಣ್ಣೆ ನೀರು ಹಾಕಿಕೊಂಡು ಹೊಸ ಬಟ್ಟೆ ಉಟ್ಕೊಂಡು, ಪೂಜೆ ಮಾಡಿ, ಹಬ್ಬದ ಊಟ ಮಾಡಿ, ಆಡುತ್ತಾರೆ, ಎಳ್ಳು ಬೀರುತ್ತಾರೆ, ತಿನ್ನುತ್ತಾರೆ.\ಟಿಸಂಕ್ರಾಂತೀನ ಒಂದು ಸ್ವಲ್ಪ ವೈಙÁ್ಞನಿಕವಾಗಿ ಅಧ್ಯಯನ ಮಾಡೋಣ. ಈ ಹಬ್ಬ ಚಳಿಗಾಲದಲ್ಲಿ ಬರತ್ತೆ. ದೇಹದಲ್ಲಿ ಉಷ್ಣಾಂಶ ಕಮ್ಮಿ ಆಗಿಬಿಟ್ಟು ಚರ್ಮ ಅದರ ಮೃದುತ್ವವನ್ನ ಕಳೆದುಕೊಂಡಿರುತ್ತದೆ. ಇದರಿಂದ ಚರ್ಮ ಬೇರೆ ಬೇರೆ ಖಾಯಿಲೆಗಳಿಗೆ ತುತ್ತಾಗತ್ತೆ. ಜಲಾಂಶದ ಅಳತೆಯನ್ನು ಸಮವಾಗಿ ಇರೋಹಾಗೆ ನೋಡಿಕೊಳ್ಳಬೇಕು. ಹೆಸರು ಬೇಳೆ ಪೊಂಗಲ್ ಇದನ್ನ ಸರಿ ಮಾಡಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಎಳ್ಳು ಬೆಲ್ಲಗಳು ಕೂಡ ಉಪಯುಕ್ತವಾಗಿ ಇರತ್ತೆ. ನಾವು ತೆಗೆದುಕೊಳ್ಳುವ ಆಹಾರದಲ್ಲಿ ಕಾಲ್ಶಿಯಂ, ಸೋಡಿಯಂ, ಪೊಟಾಶಿಯಂ, ಪ್ರೋಟೀನ್ ಅಂಶ ಜಾಸ್ತಿ ಇರತ್ತೆ. ನರಗಳನ್ನ ಬಲ ಮಾಡುತ್ತದೆ. ದೇಹದಲ್ಲಿ ಕಾಂತಿ ಬರುತ್ತದೆ. ರಕ್ತ ವರ್ಧಕಾನೂ ಹೌದು. ಮಕ್ಕಳಿಗೆ ಎಗಚಿ ಹಣ್ಣಿನ ಅಭಿಷೇಕ ಮಾಡುತ್ತಾರೆ. ಆರತಿ ಬೆಳಗುತ್ತಾರೆ. \ಟಿಸೂರ್ಯನೇ ಈ ಪ್ರಪಂಚದ ಜೀವ ಜಂತುಗಳಿಗೆ ಆಧಾರ. ಅದರಿಂದ ಮಳೆ ಬರುತ್ತದೆ. ಪೈರು ಪಚ್ಚೆ ಬೆಳೆಯತ್ತೆ. ವರ್ಷ ಪೂರ್ತಿ ಕೃಷಿಯಲ್ಲಿ ರೈತ ಕಷ್ಟ ಪಟ್ಟು ಪೈರು ಬೆಳೆಸಿರುತ್ತಾನೆ. ಈಗ ಅವನ ಶ್ರಮಕ್ಕೆ ಫಲವಾಗಿ ಕಣಜ ತುಂಬತ್ತೆ. ಸೂರ್ಯನಿಗೆ ಕೃತಙ್ಞತೆ ತೋರಿಸಕ್ಕೆ ಈ ಹಬ್ಬ. ಹೊಲಗಳಲ್ಲಿ ಪೊಂಗಲ್ ಮಾಡಿ ದಿನಮಣಿಗೆ ಅರ್ಪಿಸುತ್ತಾರೆ. ರೈತ ತನಗೆ ಸಹಾಯ ಮಾಡಿದ ಹಸು ಎತ್ತುಗಳನ್ನ  ಮೈ ತೊಳೆದು, ಒಳ್ಳೆ ಆಹಾರ ಕೊಟ್ಟು, ಅಲಂಕಾರ ಮಾಡುತ್ತಾನೆ. ಕಿಚ್ ಹಾರಿಸುತ್ತಾರೆ. ಅಕ್ಕಿ ಹಿಟ್ಟನ್ನ ನೀರಿನಲ್ಲಿ ಕದರಿಬಿಟ್ಟು ಅದರಿಂದ ಬಣ್ಣದ ರಂಗೋಲೆ ಅಲಂಕಾರವನ್ನ ಮನೆ ಮುಂದೆ ಮಾಡುತ್ತಾರೆ. ಎಲ್ಲಾ ಸಂತೋಷ ಸಂಭ್ರಮದಿಂದ ಇರುತ್ತಾರೆ. ಇದು ಒಂದು ವಿಧದಲ್ಲಿ ನಿಸರ್ಗದ ಪೂಜೆ. ಸೂರ್ಯನಿಂದ ನಮಗೆ ಅಗತ್ಯವಾದ ಶಾಖ ನೀರು ಮಳೆ ರೂಪದಲ್ಲಿ ಸಿಗತ್ತೆ.\ಟಿಮನುಷ್ಯನ ಆರು ತಿಂಗಳು ದೇವತೆಗಳ ಒಂದು ಹಗಲು. ಅದು ಉತ್ತರಾಯಣ. ಸ್ವರ್ಗದ ಬಾಗಿಲು ಈಗ ತೆರೆಯತ್ತೆ. ವೈಕುಂಠ ಏಕಾದಶಿಯಲ್ಲಿ ಸ್ವರ್ಗದಲ್ಲಿ ಇರುವ ಪರಮಾತ್ಮನಿಗೆ ನಮನ, ಪ್ರಾರ್ಥನೆ. ಈಗ ಮಕರ ಸಂಕ್ರಾಂತಿ. ಹೀಗೇ ದಕ್ಷಿಣಾಯಣದ ಆರು ತಿಂಗಳು ದೇವತೆಗಳ ಒಂದು ರಾತ್ರಿ. ಇನ್ನು ಆರು ತಿಂಗಳಿಗೆ ಕರ್ಕಾಟಕ ಸಂಕ್ರಾಂತಿ. ಆಗ ಏನೂ ವಿಶೇಷ ಇಲ್ಲ. ಉತ್ತರಾಯಣದಲ್ಲಿ ಹಗಲು ಜಾಸ್ತಿ, ರಾತ್ರಿ ಕಮ್ಮಿ. ಹಿಂದುಗಳ ಹಬ್ಬಗಳೆಲ್ಲಾ ಚಂದ್ರನ ಚಲನೆ ಮೇಲೆ ನಿಶ್ಚಯವಾಗಿರುತ್ತದೆ. ಉಗಾದಿ ಚೈತ್ರ ಮಾಸದ ಮೊದಲನೇ ದಿನ. ಭಾದ್ರಪದ ಚೌತಿಯಲ್ಲಿ ಗಣೇಶನ ಹಬ್ಬ. ಕಾರ್ತಿಕ ಮಾಸ ಪ್ರಥಮ ದೀಪಾವಳಿ. ಇದೆಲ್ಲಾ ಶುಕ್ಲ ಪಕ್ಷದಲ್ಲಿ ಬರೋದು. ಈ ಹಬ್ಬಗಳು ಯಾವ ದಿನ ಬೇಕಾದರೂ ಯಾವಾಗ ಬೇಕಾದರೂವೆ ಬರಬಹುದು. ಆದರೆ ಸಂಕ್ರಾಂತಿ ಮಾತ್ರ ನಿಶ್ಚಯವಾಗಿ ಹದಿನಾಲ್ಕನೇ ತಾರೀಖೆ (ಅಪರೂಪಕ್ಕೆ ಹದಿನೈದನೆ ದಿವಸವೂ ಬರಬಹುದು). ಪರಮಾತ್ಮ ಪ್ರಸನ್ನನಾಗಿಬಿಟ್ಟು ಲೋಕಕ್ಕೆಲ್ಲಾ ಕ್ಷೇಮ ಸಮೃದ್ಧಿ ದಯಪಾಲಿಸುತ್ತಾನೆ.";

const ESSAY_LIST_MAKARA_SANKRANTI_ENGLISH = "In Sankraanti festival (they) distribute sesame seeds mixture. (They) consider it as an insult to take or give black sesame seeds. Therefore (they) give after decorating it a little bit (by removing the skin and making it white sesame seeds). To donate black sesame seeds means to offload the evil spirits and troubles that have come upon me. But here since we mutually give and take, the flaws will not be passed on, they remain with us only. To distribute sesame seeds mixture is like distributing sweets - with our loved ones - this is a desirable task.\nInstead of black sesame seeds they give while sesame seeds. All accept it willingly. Along with sesame seeds mixture, (they) give sugarcane, sugar cubes and sugar dolls. Fruits, copra halves, colourful sugar balls, all these are combined and given. How to make black sesame seeds white ? It is not enough to simply rub sesame seeds. First, (they) soak them in water. Now the skin can be removed easily by rubbing. (They) rub on stone, spread in shade and allow to dry, then (they) roast it in a skillet, fry it and remove husks by winnowing. Now, hot white sesame seeds are ready. (They) roast fried gram in a skillet and mix. (They) use scissors meant for cutting beetlenuts to cut jaggery into small crystals and mix. (They) roast groundnuts, winnow and remove the husks and mix the seeds. (They) cut copra into small pieces and add. (We) can also mix colourful sugar balls etc. Now, beautiful sesame seeds mixture has emerged, it is ready. Distribute ! Dont throw (distribute) stones, distribute sesame seeds mixture. Experience the celebrations of the festival. Sesame seeds mixture will be very tasty. You get a lot of protein (it is protein-rich). Body will also get a lot of oil. A good remedy for the cold season.\n(They) observe sankraanti festival with fascination. On this day, Sun starts its movement from south to north direction. Let (us) begin our journey from untruth to truth.\nFor children particularly, it is overwhelming happiness. Having washed their hair after applying oil, wearing new clothes, performing worship, eating food specially made for the festival, (they) play, distribute and eat sesame seeds mixture.\nLet us study Sankraanti a bit scientifically. This festival comes during winter. Heat in the body would have becomes less (body would have lost its heat), and skin would have lost its softness. Due to this, skin becomes affected by very many skin diseases. We have to protect and make sure the measure of water content in the body is same. The porridge prepared using broken green gram dhal will help in correcting this.Sesame seeds mixture and jaggery also will be beneficial. The food we consume will be rich in calcium, spdium, potassium and protein. It will strengthen (our) nerves. Body will get a glow. Yes, it will increase our blood as well. Children are given a bath of indian jujube fruits. They wave lights for them.\nSun itself is the basis for all life on earth. We get rain from it. Crops grow. Farmer would have toiled year-long in agriculture growing crops. Now, his granary(silos) will be filled as a result of his hard work. This festival is to show gratitude towards the Sun. They prepare porridge in the fields and make an offering to Sun. Farmer will wash the cows and oxen that assisted him, feed them with good food and decorate them. They make them jump over fire. They dissolve rice flour in water, and with that they make colorful designs in front of the house. All of them will be happy and in celebration. This in a way is a worship of nature. We get the needed heat and water in the form of rain from the Sun.\nMan's six months is god-man's one day. That is 'Uttaraayana'. Heaven's doors will now open. On 'Vaikunta Ekaadashi', the God who is in heaven is prayed and bowed to. Now, it is 'Makara Sankraanti'. Like this, the six months of 'Dakshinaayana' are one night for god-men. It is 'Karkaataka Sankraanti' after six months. There is nothing special at that time. During Uttaraayana, day is longer, night shorter. All Hindu festivals are decided based on the movement of the moon. 'Ugaadi' festival is on the first day of the month 'Chaitra'. During 'Bhadrapada Chauti' it is 'Ganesha' festival. First 'Deepavali' is during the month of 'Kartika'. All of these come during 'Shukla Paksha'. These festivals can come on any day whenever. But Sankraanti festival is definitely on the fourteenth date only (ocassionally, it may come on fifteenth day also). God will be pleased and shall grant peace/safety and prosperity to the entire world.";

var encoded_array = [];
var all_encoded_array = [];
var category_encoded_array = [];
var sample_sentences_array = [];
var sample_sentences_alphabet_array = [];
var fileCount = 0;
var searchColumn = [];
var languageColumn = BS_WORD_COLUMN_ENGLISH_FONT;
var sampleSentencesLanguageColumn = ENGLISH_WORD_COLUMN; 
var searchIndex;
var search = [];
var encoded = [];
var c; 
var dictionaryDataDisplayCount = [];
var showKannadaWords;
var glossaryEnglishUL, glossaryKannadaUL;
var glossaryPaginationDiv;
var open = false;
var firstTimeInEssay=true;
var currentSampleSentencesPageArray;
var popupSampleSentencesDownloadAlertWindow = 0;
var dictionaryDownloadPopupAlphabet = [];
var hitCount = 0;
var totalNumDictionaryWords = 0;
var numDownloadedFiles = 0;
var numCategoryWords = 0;
var audioFileNames = '';
var lessonNames = [];
var lessonNamesObtained = [];
var currentAudioLessonTitle = "";
var simpleLessonArrayNames = '';
var intermediateLessonArrayNames = '';
var complexLessonArrayNames = '';
var kannada_sanketi_similar_words = [];
var kannada_sanketi_replace_a_with_o_words = [];
var kannada_sanketi_replace_u_with_i_words = [];
var kannada_sanketi_replace_h_with_p_words = [];
var kannada_sanketi_replace_b_with_v_words = [];
var kannada_sanketi_replace_last_letter_words = [];
var kannada_sanketi_replace_first_letter_words = [];
var kannada_sanketi_replace_last_two_letters_words = [];
var kannada_sanketi_replace_first_two_letters_words = [];
var dataRetrieved = 0;
var progress = 0;
var progressTimer = '';
var screenWidth;
var selectedChr = '';
var selectedLang = '';
var essayButtonAudio = null;

function encoded_array_column(arr, n) 
{ 
   var column = [];
   for(var i=0; i<arr.length; i++){
     column.push(arr[i][n]);
   }
   return column;
}

function firePhpRequest(input,callback)
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) 
       callback(this.responseText);
    };
    xmlhttp.open('GET', input, true);
    xmlhttp.send();
}

function getData()
{
   for(var chr=0;chr<Num_Alphabets;chr++)	
   {
     var filename = String.fromCharCode(97 + chr); 
     getDictionaryData(filename);
   }
}

function getDictionaryData(filename)
{
   firePhpRequest('Dictionary.php?q=' + filename,function(responseText)
   {console.log(responseText);
     for(var eaIndex=0; eaIndex<Num_Alphabets; eaIndex++)
     {
	if(responseText.charAt(1).startsWith(String.fromCharCode(97 + eaIndex))) { 
             encoded_array[eaIndex] = parse((responseText).substring(2)); //console.dir(encoded_array[eaIndex]);
  	     break;
	}
     } 
   });
}

function parse(str)
{
    fileCount++; 		
    return JSON.parse(str) ;
}

function sortDictionaryArray()
{
   for(var s=0;s<Num_Alphabets;s++)
   {
       if(encoded_array[s]) {
	  encoded_array[s].sort(function(a, b) { return a[languageColumn].localeCompare(b[languageColumn]); } ); 
       }
    } 
}

function getSampleSentencesData()
{
   firePhpRequest('SampleSentences.php?q=',function(responseText)
   {
        sample_sentences_array = JSON.parse(responseText); 
	refreshSampleSentencesPage();
   });
}

function sortSampleSentencesArray()
{
   sample_sentences_array.sort(function(a, b) { return a[sampleSentencesLanguageColumn].localeCompare(b[sampleSentencesLanguageColumn]); } ); 
}

function initializeSampleSentencesAlphabetArray()
{
  for(var i=0;i<sample_sentences_alphabet_array.length;i++)
  {
     var array1 = sample_sentences_alphabet_array[i]; 
     if(array1) {
     for(var j=0; j<array1.length;j++)
     {
        var array2 = array1[j];
        for(var k=0;k<array2.length;k++)
        {
          array2[k] = "" ;
        }
     }
     array1.length=0;
    }
  }
  sample_sentences_alphabet_array.length = 0;
}

function splitSampleSentencesArray()
{
  var start = alphabetIndex = 0;
  var word1,word2,len;
  initializeSampleSentencesAlphabetArray();
  for(len=0;len<sample_sentences_array.length;len++)
  {
      word1 = sample_sentences_array[len][sampleSentencesLanguageColumn].charAt(0); 
      word1 = word1.toLowerCase();
      if(len == sample_sentences_array.length-1)
        word2 = sample_sentences_array[len-1][sampleSentencesLanguageColumn].charAt(0); 
      else
        word2 = sample_sentences_array[len+1][sampleSentencesLanguageColumn].charAt(0); 
      word2 = word2.toLowerCase();
      if((word1 != word2) || (len == sample_sentences_array.length-1))
      {
        alphabetIndex = word1.charCodeAt(0)-LOWER_CASE_ASCII_START; 
        if(alphabetIndex < 0) alphabetIndex=Num_Alphabets; 
        sample_sentences_alphabet_array[alphabetIndex] = JSON.parse(JSON.stringify(sample_sentences_array.slice(start,len+1)));
        start = len+1;
      }
  }

  if(sample_sentences_alphabet_array[Num_Alphabets])
  for(len=0;len<sample_sentences_alphabet_array[Num_Alphabets].length;len++) {
      word1 = sample_sentences_alphabet_array[Num_Alphabets][len]; 
      word2 = word1[sampleSentencesLanguageColumn].charCodeAt(1)-UPPER_CASE_ASCII_START; 
      sample_sentences_alphabet_array[word2].push(word1);
  }
}

function refreshSampleSentencesPage()
{
   sortSampleSentencesArray(); 
   splitSampleSentencesArray();
   showSampleSentences('A');
   var link = document.getElementById('sample_a');
   link.style.color = COLOR_GREEN;
}

function getSearchColumn()
{
    for(var s=0;s<Num_Alphabets;s++)
    {
	if(encoded_array[s]) {
           if(languageColumn == ENGLISH_WORD_COLUMN)
  	     searchColumn[s] = encoded_array_column(encoded_array[s],languageColumn);
           else
          {
             var searchColumnEng = encoded_array_column(encoded_array[s],languageColumn); 
             var searchColumnKan = encoded_array_column(encoded_array[s],languageColumn+1);
             searchColumn[s] = combineSearchColumns(searchColumnEng,searchColumnKan);  
	  }
       }
    } 

    if(languageColumn != BS_WORD_COLUMN_ENGLISH_FONT)
    {
       var mergedSearchColumn = mergeSearchColumns(); 
       mergedSearchColumn.sort(function(a, b) { return a.localeCompare(b); } ); 

       for(var s=0;s<Num_Alphabets;s++)
         if(searchColumn[s])
           while(searchColumn[s].length)
             searchColumn[s].pop();
       var start = 0; 
       for(var l=0;l<mergedSearchColumn.length;l++)
       {
         var word1 = (mergedSearchColumn[l].charAt(0)).toLowerCase(); 
         var d;
         if(l<mergedSearchColumn.length-1)
           d = l+1;
         else
           d = l-1;

         var word2 = (mergedSearchColumn[d].charAt(0)).toLowerCase();
         if(word1 == word2) 
         {
           if(l == mergedSearchColumn.length-1)
           {
              searchColumn[findArrayIndex(word1)] = mergedSearchColumn.slice(start,mergedSearchColumn.length);
              break;
           }
           continue;
         }
         else
         {
           end = l+1;
           searchColumn[findArrayIndex(word1)] = mergedSearchColumn.slice(start,end);
           start = end;
         }
       }
    }
}

function mergeSearchColumns()
{
   var mergedSearchColumn = [];
   var s = 0;
   while(s<Num_Alphabets)
   {
     if(searchColumn[s])
       mergedSearchColumn = mergedSearchColumn.concat(searchColumn[s]); 
     s++;
   }

   return mergedSearchColumn;
}

function findArrayIndex(ch)
{
  for(var index=0; index<Num_Alphabets; index++)
   {
      if((ch == String.fromCharCode(97 + index)) | (ch == String.fromCharCode(65 + index))) break;
   }
   
   return index;
}

function printInAllFormats(str)
{
  var len = str.length;
  for(var a=0;a<len;a++)
  {
    var ch = str.charCodeAt(a);
    console.log("Letter:" + str.charAt(a) + "\n");
    console.log("utf-16 decimal:" + ch + "\n");
    console.log("utf-16 hex:" + ch.toString(16) + "\n");  
    console.log("utf-16 binary:" + ch.toString(2) + "\n"); 
    console.log("\n\n");
  }
}

function combineSearchColumns(a,b)
{
  var searchArray = [];
  for(var l=0;l<a.length;l++)
  {
     str = a[l] + " (" + b[l] + ")";
     searchArray[l] = str;
  }
  return searchArray;
}

function printCode(str)
{
  var len = str.length;
  for(var a=0;a<len;a++)
    console.log(str.charCodeAt(a).toString() + " ");
  console.log("\n");
}

function toUnicode(str) {
	return str.split('').map(function (value, index, array) {
		var temp = value.charCodeAt(0).toString(16).toUpperCase();
		if (temp.length > 2) {
			return '\\u' + temp;
		}
		return value;
	}).join('');
}

function checkUTF8(text) { console.log("text="+ text + "\n") 
    var utf8Text = text;
    try {
        utf8Text = decodeURIComponent(escape(text));console.log("utf8text="+ utf8Text + "\n")
    }catch(e) {
         console.log(e.message + "\n"); 
    }   console.log("returntext="+ utf8Text + "\n")
    return utf8Text; 
}

const inputHandler = function(e) {
   availableTags = [];
   var tagIndex;

var word = e.target.value; 

word = convertSpecialLetter(word); 
document.getElementById('text').value = word;

if(!((languageColumn == ENGLISH_WORD_COLUMN) && (word.startsWith('(')))) {
for(tagIndex=0; tagIndex<Num_Alphabets; tagIndex++)
   {
	 if(word.startsWith(String.fromCharCode(97 + tagIndex)) | word.startsWith(String.fromCharCode(65 + tagIndex))) break;
   }

   if(tagIndex == Num_Alphabets) { return;  } 
}
else {
  tagIndex = Num_Alphabets; 
}
   availableTags = searchColumn[tagIndex].filter(function(str) { return str.toLowerCase().startsWith(word.toLowerCase()); } );

   var tagsLength = availableTags.length; 
   var count = 1;
   while(count < tagsLength)
   {
        if(availableTags[count].localeCompare(availableTags[count-1]) == 0)
        {
            availableTags.splice(count,1);
	    tagsLength--;
	    continue;
        }
	count++; 
   }

$( function() {
      $( "#text" ).autocomplete({
      source: availableTags,
      minLength: 1,
      select: function (e, ui) {
        document.getElementById('text').value = ui.item.value;
        searchExcel();
        }
    });
 });     
  return;
}

function convertSpecialLetter(word)
{
  var len = word.length;
  var newword = '';
  for(var i=0;i<len;i++)
  {
    switch(word.charAt(i))
    { 
      case 'ạ': newword += 'ạ'; break;
      case 'ḅ' : newword += 'ḅ'; break; 
      case 'ḍ' : newword += 'ḍ'; break; 
      case 'ẹ' : newword += 'ẹ'; break; 
      case 'ḥ' : newword += 'ḥ'; break; 
      case 'ị' : newword += 'ị'; break; 
      case 'ḳ' : newword += 'ḳ'; break; 
      case 'ḷ' : newword += 'ḷ'; break; 
      case 'ṃ' : newword += 'ṃ'; break; 
      case 'ṇ' : newword += 'ṇ'; break; 
      case 'ọ' : newword += 'ọ'; break; 
      case 'ṛ' : newword += 'ṛ'; break; 
      case 'ș' : newword += 'ṣ'; break; 
      case 'ṭ' : newword += 'ṭ'; break; 
      case 'ụ' : newword += 'ụ'; break; 
      case 'ṿ' : newword += 'ṿ'; break; 
      case 'ẉ' : newword += 'ẉ'; break; 
      case 'ỵ' : newword += 'ỵ'; break; 
      case 'ẓ' : newword += 'ẓ'; break; 
      case 'Ạ': newword += 'Ạ'; break;
      case 'Ḅ': newword += 'Ḅ'; break;
      case 'Ḍ': newword += 'Ḍ'; break;
      case 'Ẹ': newword += 'Ẹ'; break;
      case 'Ḥ' : newword += 'Ḥ'; break;
      case 'Ḳ' : newword += 'Ḳ'; break;
      case 'Ḷ' : newword += 'Ḷ'; break;
      case 'Ṃ' : newword += 'Ṃ'; break;
      case 'Ṇ' : newword += 'Ṇ'; break;
      case 'Ŗ' : newword += 'Ṛ'; break;
      case 'Ș' : newword += 'Ṣ'; break;
      case 'Ṭ' : newword += 'Ṭ'; break;
      case 'Ṿ' : newword += 'Ṿ'; break;
      case 'Ẉ' : newword += 'Ẉ'; break;
      case 'Ẓ' : newword += 'Ẓ'; break;
      default : newword += word.charAt(i);
    }
  } 
  return newword;
}

function findWordInEncodedArray(searchWordStr)
{
    var searchWord = '';
    if(languageColumn != ENGLISH_WORD_COLUMN)
    {
      var searchWords = searchWordStr.split("("); 
      searchWord = searchWords[0].trim();
    }
    else
      searchWord = searchWordStr;

    var column = [];
    var returnArray = [];
    for(var s=0;s<Num_Alphabets;s++)
    {
	if(encoded_array[s]) {
 	  column = encoded_array_column(encoded_array[s],languageColumn);
          for(var l=0;l<column.length;l++)
          {
             if(column[l] == searchWord)
             {
               var arr = [];
               arr[0] = s;
               arr[1] = l;
               returnArray.push(arr);
             }
          }
        }
    }
    return returnArray;
}

function playAudio(e, link) {
  audio = document.createElement("audio");
  var src = document.createElement("source");
  src.src = link.title; 
  audio.appendChild(src);
  audio.play();
  e.preventDefault();
}

function playEssayAudio(e, link) {
  var but = document.getElementById("essayButtonTitle");
  if(but.innerHTML == "Stop (ನಿಲ್ಲಿಸು)")
  {
     but.innerHTML = "Audio (ಆಡಿಯೊ)";
     essayButtonAudio.pause();
     return;
  }

  but.innerHTML = "Stop (ನಿಲ್ಲಿಸು)"; 

  if(essayButtonAudio)
  {
    essayButtonAudio.play();
    return;
  }

  essayButtonAudio = document.createElement("audio");
  essayButtonAudio.setAttribute("id", "essayButtonAudio"); 
  var src = document.createElement("source");
  src.src = link.title; 
  essayButtonAudio.appendChild(src);
  essayButtonAudio.play();
  e.preventDefault();
}

function showAndPlayAudio(e, link) {
   var div = document.getElementById("learnAudioDiv");
   div.style.display = "block";
   var transDiv = document.getElementById("audioTranscriptionDiv");       
   var transcriptionArea = document.getElementById('audioTranscription');
   var audio = document.getElementById("learnAudio");
   if(audio) {
     audio.remove();
     removeAllChildNodes(transcriptionArea);
   }

   var title = document.getElementById('audioLessonTitle');
   title.innerHTML = e.target.innerText;
   currentAudioLessonTitle = link.title.slice(link.title.indexOf("Audio"));

   var src = link.title + ".aac";
   var track = link.title + ".vtt";

   var audioString = '<audio controls id="learnAudio" crossorigin="anonymous"><source src="';
   audioString += src + '" ' + 'type="audio/aac">';
   audioString += '<track kind="subtitles" label="English subtitles" src="';
   audioString += track + '" ';
   audioString += 'srclang="en" default></track>';
   audioString += ' </audio>'; 
   div.insertAdjacentHTML('beforeend', audioString);
   document.getElementById('learnAudio').textTracks[0].addEventListener('cuechange', function() {
       if(this.activeCues[0]) {
           var totalHeight = transDiv.clientHeight; 
           var text = this.activeCues[0].getCueAsHTML().textContent; 
           var result = text.split(/\r?\n/); 
           var lines = result.length;
           transcriptionArea.style.marginTop = totalHeight/2 - (lines*(isMobile()?1:20)) + "px"; 
           var color = "";
           var colorCount = 0;
           removeAllChildNodes(transcriptionArea);
           for(var l=0;l<result.length;l++) {
            switch(colorCount)
            {
               case 0: color = "#641E16"; colorCount++; break;
               case 1: color = "#E74C3C"; colorCount++; break;
               case 2: color = "#78281F"; colorCount = 0; break;
            }
            var line = document.createElement("span");
            line.style.color = color;
            line.appendChild(document.createTextNode(result[l]));
            line.appendChild(document.createElement("br"));
            line.appendChild(document.createElement("br"));
            transcriptionArea.appendChild(line);
           }
       }
   });
}

function downloadLessonsAudio()
{
  statu("audioDownload");
  var src = currentAudioLessonTitle + ".aac";
  var track = currentAudioLessonTitle + ".vtt";
  var arg = src + "," + track;
  createAudioArchive(arg, continu, "audioDownload");
}


function downloadAllSimpleLessonsAudio()
{
  statu("audioDownloadSimple");
  createAudioArchive(simpleLessonArrayNames, continu, "audioDownloadSimple");
}

function downloadAllIntermediateLessonsAudio()
{
  statu("audioDownloadIntermediate");
  createAudioArchive(intermediateLessonArrayNames, continu, "audioDownloadIntermediate");
}

function downloadAllComplexLessonsAudio()
{
  statu("audioDownloadComplex");
  createAudioArchive(complexLessonArrayNames, continu, "audioDownloadComplex");
}

function downloadAllLessonsAudio(lang)
{
  statu("audioDownloadAll");
  var array = "";
  if(simpleLessonArrayNames != "")
    array = simpleLessonArrayNames;
  else if(intermediateLessonArrayNames != "")
    array = intermediateLessonArrayNames;
  else if(complexLessonArrayNames != "")
    array = complexLessonArrayNames;
  else
    return;

  var lang = array.split(","); 
  lang = lang[0].split("/"); 
  lang = lang[2]; 
  createAudioArchive("AllL," + lang, continu, "audioDownloadAll");
}

function statu(id)
{
  var button = document.getElementById(id);
  button.disabled = true;
  freezeMainWindow();
}

function continu(id)
{
  var button = document.getElementById(id);
  button.disabled = false;
  unfreezeMainWindow();
}

function getSampleSentencesFileHeaderString()
{
  var CsvString = "";
  CsvString += EXAMPLE_SENTENCE_ENGLISH_NAME + ',';  
  CsvString +=  EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_BS_ENGLISH_FONT_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_BS_KANNADA_FONT_NAME + ',' ;  
  CsvString += AUDIO_BS_EXAMPLE_SENTENCE_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_KS_ENGLISH_FONT_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_KS_KANNADA_FONT_NAME + ',' ;  
  CsvString +=  AUDIO_KS_EXAMPLE_SENTENCE_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_LS_ENGLISH_FONT_NAME + ','; 
  CsvString +=  EXAMPLE_SENTENCE_LS_KANNADA_FONT_NAME + ',' ;  
  CsvString +=  AUDIO_LS_EXAMPLE_SENTENCE_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_MS_ENGLISH_FONT_NAME + ',' ;  
  CsvString +=  EXAMPLE_SENTENCE_MS_KANNADA_FONT_NAME + ',' ;  
  CsvString +=  AUDIO_MS_EXAMPLE_SENTENCE_NAME + ',';
  CsvString += "\r\n";
  return CsvString;
}

function downloadDictionaryData(array)
{
  var CsvString = "";
  array.forEach(function(RowItem, RowIndex) {
  RowItem.forEach(function(ColItem, ColIndex) {
      if(ColIndex != ROW_ID_COLUMN) 
      {
         if(ColItem == "") CsvString += ',' ;
         else if((ColIndex == AUDIO_BS_WORD) || (ColIndex == AUDIO_KS_WORD) || (ColIndex == AUDIO_LS_WORD) || (ColIndex == AUDIO_MS_WORD) || (ColIndex == AUDIO_BS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_KS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_LS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_MS_EXAMPLE_SENTENCE))
            CsvString += '=HYPERLINK("' + ColItem + '"' + ')' + ',';
         else  CsvString += '"' + ColItem + '"' + ',';
      }
    });
    CsvString += "\r\n";
  });
  return CsvString;
}

function getDictionaryFileInstruction()
{
  var CsvString = "";
  CsvString += DICTIONARY_WORDS_INSTRUCTION_ENGLISH;
  CsvString += DICTIONARY_WORDS_INSTRUCTION_KANNADA;
  CsvString += "\r\n" + "\r\n" + "\r\n";
  return CsvString; 
}

function parent_popupSampleSentencesDownloadAlert_disable() 
{
   if(popupSampleSentencesDownloadAlertWindow == 1)
     hideDictionaryPopupAlert();
}

function showDictionaryPopupAlert()
{ 
   document.getElementById('sampleSentencesAlert').style.display = "block";
   document.getElementById('sampleSentencesAlert').style.pointerEvents = "auto";
   freezeMainWindow();
   popupSampleSentencesDownloadAlertWindow = 1;
}

function hideDictionaryPopupAlert()
{
  document.getElementById('sampleSentencesAlert').style.display = "none";	
  unfreezeMainWindow();
  popupSampleSentencesDownloadAlertWindow = 0;	
}

function saveFile(data,filename)
{
  var CsvString = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(data);
  var x = document.createElement("A");
  x.setAttribute("href", CsvString );
  x.setAttribute("download",filename);
  document.body.appendChild(x);
  x.click();
}

function downloadSampleSentences()
{
  var CsvString = "";
  CsvString += getDictionaryFileInstruction();
  CsvString += getSampleSentencesFileHeaderString();
  CsvString += downloadDictionaryData(currentSampleSentencesPageArray);
  saveFile(CsvString,"SampleSentences.csv")
}

function downloadSampleSentencesAndAudio()
{
    downloadSampleSentences(); 
    if(currentSampleSentencesPageArray.length < sample_sentences_array.length)
       createAudioArchive(getListOfFilesToArchive(currentSampleSentencesPageArray,AUDIO_BS_WORD));
    else
       createAudioArchive("All");
}

function getListOfFilesToArchive(array, index)
{
  var filenames = "";
  for(var n=0;n<array.length;n++)
  {
     var file = array[n][index];
     file = file.replace(/\\/g, "\/");
     filenames +=  file ;
     if(n<array.length-1)
         filenames += ',';
  }
  return filenames;
}

function createAudioArchive(dir, fun, id)
{
if(fun === undefined)
 fun = null;
if(id === undefined)
 id = '';
$.post( "CreateAllArchive.php", {q:dir},function(data,status){ Callback(data); if(fun)fun(id)} );
}

function sleep(ms) 
{
    return new Promise(function(resolve) { setTimeout(resolve, ms); } );
}

async function Callback(file) 
{
    await sleep(5000);
    downloadArchive(file); 
    await sleep(5000);
    deleteArchive(file);
}

function downloadArchive(archiveFile)
{
  var x = document.createElement("A");
  var file = "http://192.168.1.3/Sanketi Website/" + archiveFile;
  x.setAttribute("href", file );
  document.body.appendChild(x);
  x.click();
}

function deleteArchive(archiveFile)
{
   archiveFile = archiveFile.replace(/\//g, "\\\\");
   firePhpRequest('DeleteArchive.php?file=' + archiveFile,function(responseText)
   {
   });
}

async function CallbackDictionaryWords(file) 
{
    await sleep(5000);
    downloadArchive(file); 
    await sleep(5000);
    deleteArchive(file);
    audioToBeArchived();
}

function createDictionaryWordsAudioArchive(dir)
{
   firePhpRequest('CreateDictionaryArchive.php?q=' + dir,function(responseText)
   {
       CallbackDictionaryWords(responseText);
   });
}

function audioToBeArchived()
{
    var numOfAlphabets = 0;
    var letter = Num_Alphabets;

    for(var f=0;f<Num_Alphabets;f++)
    {
       if(dictionaryDownloadPopupAlphabet[f])
       {
         if(letter == Num_Alphabets)
           letter = f;
 	 numOfAlphabets++;
       }
    }
     
    if(!numOfAlphabets) return;

    if(numOfAlphabets == 21)
    {
      if(hitCount == 0)
      {
         hitCount = 1;
	 createDictionaryWordsAudioArchive("All");
      }
      else
      {
         hitCount = 0;
         check_if_all_files_are_downloaded(0);
      }
    }
    else {
      dictionaryDownloadPopupAlphabet[letter] = 0;
      createDictionaryWordsAudioArchive(String.fromCharCode(97 + letter)); 
    }
}

function check_if_all_files_are_downloaded(i)
{
    if((numDownloadedFiles == 21) || (i==25))
    {
      for(var f=0;f<Num_Alphabets;f++)
        dictionaryDownloadPopupAlphabet[f] = 0; 
    }
    else
    {
      setTimeout(function() {
            check_if_all_files_are_downloaded(i+1);
        }, 1000);
    }
}

function dictionaryDownloadPopupOkClicked()
{
   numDownloadedFiles = 0;
   var span = document.getElementsByClassName("dictionaryPopupClose")[0];
   span.click(); 
   downloadDictionaryWordFiles();
   if(document.getElementById("dictionaryDownloadPopup_audio").checked == true) 
      audioToBeArchived(); 
}

async function downloadDictionaryWordFiles() 
{
   for(var f=0;f<Num_Alphabets;f++)
   {
     if(dictionaryDownloadPopupAlphabet[f])
     {
         getSanketiWordFileFor(f);
         await sleep(1000);
     }
   }
   if(f == Num_Alphabets)
     if(document.getElementById("dictionaryDownloadPopup_audio").checked != true) 
      for(var f=0;f<Num_Alphabets;f++)
        dictionaryDownloadPopupAlphabet[f] = 0; 
}

function getSanketiWordFileHeaderString()
{
   var CsvString = "";
   CsvString += ENGLISH_WORD_COLUMN_NAME + ',';
   CsvString += KANNADA_WORD_COLUMN_ENGLISH_FONT_NAME + ',';
   CsvString += KANNADA_WORD_COLUMN_KANNADA_FONT_NAME + ',';
   CsvString += BS_WORD_COLUMN_ENGLISH_FONT_NAME + ',';
   CsvString += BS_WORD_COLUMN_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_BS_WORD_NAME + ',';
   CsvString += KS_WORD_COLUMN_ENGLISH_FONT_NAME + ',';
   CsvString += KS_WORD_COLUMN_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_KS_WORD_NAME + ',';
   CsvString += LS_WORD_COLUMN_ENGLISH_FONT_NAME + ',';
   CsvString += LS_WORD_COLUMN_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_LS_WORD_NAME + ',';
   CsvString += MS_WORD_COLUMN_ENGLISH_FONT_NAME + ',';
   CsvString += MS_WORD_COLUMN_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_MS_WORD_NAME + ',';
   CsvString += SANKETI_WORD_PART_OF_SPEECH_NAME + ',';
   CsvString += SANKETI_WORD_CATEGORY_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_ENGLISH_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_BS_ENGLISH_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_BS_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_BS_EXAMPLE_SENTENCE_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_KS_ENGLISH_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_KS_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_KS_EXAMPLE_SENTENCE_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_LS_ENGLISH_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_LS_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_LS_EXAMPLE_SENTENCE_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_MS_ENGLISH_FONT_NAME + ',';
   CsvString += EXAMPLE_SENTENCE_MS_KANNADA_FONT_NAME + ',';
   CsvString += AUDIO_MS_EXAMPLE_SENTENCE_NAME + ',';
   CsvString += "\r\n";
   return CsvString;
}

function getSanketiWordFileFor(a) 
{ 
    var letter = String.fromCharCode(97 + a); 
    var filename = letter + ".csv"; 
    var CsvString = "";
    CsvString += getDictionaryFileInstruction();
    CsvString += getSanketiWordFileHeaderString();
    if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT)
      CsvString += downloadDictionaryData(encoded_array[a]);
    else
    {
       var mergedEncodedArray = [];
       for(var i=0;i<Num_Alphabets;i++)
         if(encoded_array[i])
         {
             var singleArray = encoded_array[i];
             for(var l=0;l<singleArray.length;l++)
             {
               var row = singleArray[l];
               if(row[languageColumn] == '') continue;
               mergedEncodedArray.push(row);
             }
         }

       mergedEncodedArray.sort( function(a, b) { return a[languageColumn].localeCompare(b[languageColumn]); } );

       var subsetMergedEncodedArray = [];
       for(var j=0;j<mergedEncodedArray.length;j++)
       {
         var row = mergedEncodedArray[j]; 
         var word = row[languageColumn]; 
         var firstLetter = word.charAt(0).toLowerCase(); 
         if(firstLetter == letter) 
           subsetMergedEncodedArray.push(row); 
         else if(firstLetter > letter)
           break;
       } 
       CsvString += downloadDictionaryData(subsetMergedEncodedArray);
    }
    saveFile(CsvString,filename);
    numDownloadedFiles++; 
}

function downloadCategoryText(audio)
{
   var category = '';
   if(selectedLang == "English")
     category = document.getElementsByClassName("categoryDiv")[0].value;
   else if(selectedLang == "Kannada")
     category = document.getElementsByClassName("categoryDiv")[1].value;
   category = category.split(" "); 
   category = category[0];

   var file = '';
   var CsvString = '';
   CsvString += getDictionaryFileInstruction();
   CsvString += getSanketiWordFileHeaderString();

   for(var c = 0;c<Num_Alphabets;c++)
   {
     var array = encoded_array[c];
     for(var row=0; row<array.length; row++)
     {
        if(!(category.localeCompare(array[row][SANKETI_WORD_CATEGORY]) == 0)) { continue; }
        array[row].forEach(function(ColItem, ColIndex) {
         if(ColIndex != 0) //id not needed
         {
           if(ColItem == "") CsvString += ',' ;
           else if((ColIndex == AUDIO_BS_WORD) || (ColIndex == AUDIO_KS_WORD) || (ColIndex == AUDIO_LS_WORD) || (ColIndex == AUDIO_MS_WORD) || (ColIndex == AUDIO_BS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_KS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_LS_EXAMPLE_SENTENCE) || (ColIndex == AUDIO_MS_EXAMPLE_SENTENCE))
           {
              CsvString += '=HYPERLINK("' + ColItem + '"' + ')' + ',';
              if(audio)
              {
                file = ColItem.replace(/\\/g, "\/") + ',';
                audioFileNames += file;
              }
           }
           else  CsvString += '"' + ColItem + '"' + ',';
         }
        });
        CsvString += "\r\n";
     }
   }
   
   var filename = "Category - " + category + ".csv"; 
   saveFile(CsvString,filename)
}

function downloadCategoryTextAndAudio()
{
  downloadCategoryText(1);
  createAudioArchive(audioFileNames.substr(0,audioFileNames.length-1));
}

function getLangIndex(lang)
{
   switch(lang)
   {
      case BETTADAPURA_SANKETI : return BETTADAPURA_SANKETI_INDEX;
      case KAUSHIKA_SANKETI : return KAUSHIKA_SANKETI_INDEX;
      case LINGADAHALLI_SANKETI : return LINGADAHALLI_SANKETI_INDEX;
      case MATTUR_SANKETI : return MATTUR_SANKETI_INDEX;
   }
}

function getLessonNames(lang,index)
{
   firePhpRequest('GetLessonNames.php?q=' + lang,function(responseText)
   {
       lessonNames[index] = JSON.parse(responseText); 
       lessonNamesObtained[index] = 1; 
   });
}

function checkSampleSentencesArrayLengthAndDownload()
{
   if(sample_sentences_array.length == 0)
      setTimeout(function() {
            checkSampleSentencesArrayLengthAndDownload();
        }, 1000);
   else {
   currentSampleSentencesPageArray = sample_sentences_array;
   downloadSampleSentences();
   }
}

function showProgress()
{
  document.getElementById("progressContainer").style.display = "block";
  var elem = document.getElementById("progressIndicator");
  progress = 1;
  progressTimer = setInterval(frame, 8000);
  function frame() {
    if (progress >= 100) {
      clearInterval(progressTimer);
      document.getElementById("progressContainer").style.display = "none";
    } else {
        progress++; 
      elem.style.width = progress + '%'; 
      elem.innerHTML = progress.toString() + '%';
    }
  }
}

function createEntireProjectArchive()
{
   $.post( "DownloadDictionaryDataFiles.php", {q:'create'},function(data,status)
   { 
     var arg = "DownloadDictionaryDataFiles.php?q=" + data ; 
     window.location=arg;
     createAudioArchive("AllP", projectArchiveCallback);
   } ); 
   showProgress();
}

function projectArchiveCallback()
{
   if(progress < 100)
   {
      progress = 100;
      clearInterval(progressTimer);
      document.getElementById("progressContainer").style.display = "none";
   }
   unloadAll(); 
   unfreezeMainWindow();
}
