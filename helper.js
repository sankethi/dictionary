
unloadAll(); 
checkMediaType();

var elem = document.getElementById("defaultOpen");
if(elem)
  elem.click();

if(document.querySelector('input[name="SampleSentencesLanguageSelection"]')){
document.querySelectorAll('input[name="SampleSentencesLanguageSelection"]').forEach(function(elem) {
        elem.addEventListener("click", function(event){
            setSampleSentencesLanguage(event.target.value);
        });
document.getElementById("sample_lang_eng").checked = true;
});

}

function checkMediaType()
{
  screenWidth = screen.width; 
}

function isMobile()
{
    return (screenWidth <= 1024) ? 1 : 0;
}

function isMobile280()
{
    return ((screenWidth > 279) && (screenWidth <= 319)) ? 1 : 0;
}

function isMobile414()
{
    return ((screenWidth > 400) && (screenWidth <= 480)) ? 1 : 0;
}

function isTab()
{
    return ((screenWidth > 480) && (screenWidth <= 768)) ? 1 : 0;
}

function isLaptop()
{

    return ((screenWidth > 768) && (screenWidth <= 1024)) ? 1 : 0;
}

function isDesktop()
{

    return ((screenWidth > 1024) && (screenWidth <= 1200)) ? 1 : 0;
}

function isTv()
{

    return (screenWidth > 1200) ? 1 : 0;
}

function retrieveDataOnce()
{
  var inter;
  document.getElementById("load").style.display = "block";
  document.getElementById("spinner").style.display = "block";
  freezeMainWindow();
  getData(); 

  inter = setInterval( function() {
    if(fileCount >= Num_Alphabets)
    {
	inter = clearInterval(inter); 
 	sortDictionaryArray(); 
	getSearchColumn(); 
        document.getElementById('spinner').style.display = 'none';	 
	document.getElementById('load').style.display = 'none';	 
        unfreezeMainWindow();
        dataRetrieved = 1;
    }
   } , 1000);
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  unloadAll();

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  openScreen();
}

function Reference()
{
   var frame = document.getElementById('iframe_samples');
   var xmlhttp = new XMLHttpRequest();

   xmlhttp.onload = function() {
     if (this.readyState == 4 && this.status == 200) { frame.append(this.responseText); }	
   };

   xmlhttp.open('GET', 'Reference.php');
   xmlhttp.send();

}

function openDictionary()
{
    unloadAll();
    document.getElementById("dictionaryFrame").style["display"] = "block"; 
    clearScreen();

    if(fileCount < Num_Alphabets) { retrieveDataOnce(); }
}

function clearScreen()
{
    if(isMobile())
      document.getElementById("MainMenu").style["display"] = "none"; 
}

function openScreen()
{
    if(isMobile())
      document.getElementById("MainMenu").style["display"] = "block"; 
}

function unloadElement(id)
{
  var elem = document.getElementById(id); //console.log(id + "     " + elem);
  if(elem) 
    elem.style["display"] = "none"; 
}

function unloadAll()
{
  unloadElement("iframe_samples");
  unloadElement("dictionaryFrame");
  unloadElement("dictionaryTable");
  unloadElement("SampleSentences");
  unloadElement("Glossary");
  unloadElement("LearnSanketi");
  unloadElement("Tricks");
  unloadElement("Variations");
  unloadElement("Essay");
  unloadElement("LearnMenu-content");
  unloadElement("learnAudioDiv");
  unloadElement("MainDownloadBooks");
  unloadElement("MainDownloadProject");
  unloadElement("progressContainer");
}

function openSampleSentences()
{
    unloadAll();
    clearScreen();
    if(sample_sentences_array.length == 0)
       getSampleSentencesData();
    document.getElementById("SampleSentences").style["display"] = "block"; 
    if(!isMobile())
      if(screenWidth < LARGE_SCREEN_WIDTH)
          document.getElementById("SampleSentencesText").style["text-align"] = "left"; 
}

function showSampleSentences(item)
{
    if(popupSampleSentencesDownloadAlertWindow) return;

    var link = document.getElementById('sample_a');
    if((item != 'A'))
      link.style.color = COLOR_BLUE;

    var displayArea = document.getElementById("SampleSentencesData");
    displayArea.innerHTML = "";
    displayArea.appendChild(document.createElement('br'));
    displayArea.appendChild(document.createElement('br'));
    var index;
    if(item == 'All') 
      currentSampleSentencesPageArray = sample_sentences_array;
    else 
      currentSampleSentencesPageArray = sample_sentences_alphabet_array[item.charCodeAt()-UPPER_CASE_ASCII_START];

    if(currentSampleSentencesPageArray) {
    for(var len=0;len<currentSampleSentencesPageArray.length;len++)
    {
       displayIndex(displayArea,len+1);
       displaySamplesTable(displayArea,currentSampleSentencesPageArray[len]);
       displayArea.appendChild(document.createElement('br'));
    }
  }
}

function setSampleSentencesLanguage(item)
{
   switch(item)
   {
      case 'Kan':
	   sampleSentencesLanguageColumn = KANNADA_WORD_COLUMN_ENGLISH_FONT;break;
      case 'BS':
	   sampleSentencesLanguageColumn = BS_WORD_COLUMN_ENGLISH_FONT;break;
      case 'KS':
	   sampleSentencesLanguageColumn = KS_WORD_COLUMN_ENGLISH_FONT;break;
      case 'LS':
	   sampleSentencesLanguageColumn = LS_WORD_COLUMN_ENGLISH_FONT;break;
      case 'MS':
	   sampleSentencesLanguageColumn = MS_WORD_COLUMN_ENGLISH_FONT;break;
      default:
	   sampleSentencesLanguageColumn = ENGLISH_WORD_COLUMN;
   }
   refreshSampleSentencesPage();
}

function showSampleSentencesDropDown()
{
   if(screenWidth < LARGE_SCREEN_WIDTH)
   {
     var id = document.getElementById('SampleSentencesDownloadDropdown');
     toggleDisplay(id);
   }
}

function toggleDisplay(id)
{ 
   if(id.style.display == 'block')
     id.style.display = 'none';
   else
     id.style.display = 'block';
}

function keyboardDropDownClick()
{
  var id = document.getElementById("keyboardChart"); 
  var table = document.getElementById("dictionaryTable"); 
  if(id.style.display == "none")
  {
    id.style.display = "block";
    table.style.opacity = "0.3";
  }
  else
  {
    id.style.display = "none";
    table.style.opacity = "1.0";
  }
}

function openEssay()
{
    unloadAll();
    clearScreen();
    document.getElementById("Essay").style["display"] = "block" ;

    var isResizing = false;
    (function() {
       var container = document.getElementById("Essay"),
       left = document.getElementById("Essay_left_panel"),
       right = document.getElementById("Essay_right_panel"),
       handle = document.getElementById("Essay_drag");

       handle.onmousedown = function(e) {
        isResizing = true;
       };

       document.onmousemove = function(e) {
         if (!isResizing) {
           return;
         }

         var offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);
         left.style.right = offsetRight + "px";
         right.style.width = offsetRight + "px";
       } 

       document.onmouseup = function(e) {
         isResizing = false;
       }
    })();
}

function openGlossary()
{
    unloadAll();
    clearScreen();
    document.getElementById("Glossary").style["display"] = "block" ;
    if(fileCount < Num_Alphabets) { retrieveDataOnce(); }
    if(glossaryEnglishUL == null) {createEnglishAlphabetLinks();}
    if(glossaryKannadaUL == null) {createKannadaAlphabetLinks();}
    if(glossaryPaginationDiv == null) { createPagination(); }
    document.body.addEventListener('click', function() {
       var categoryDiv = document.getElementsByClassName("categoryDiv"); 
       if(categoryDiv && open) {
	categoryDiv[0].style.display = "none";
	categoryDiv[1].style.display = "none";
	open = !open;
       }}, true); 
}

function openLearnMainMenu()
{
   document.getElementById("LearnMainMenu").style["display"] = "block" ;
}

function openLearnSanketi(lang)
{
    unloadAll();
    clearScreen();
    var index = getLangIndex(lang); //console.log(index + " " + lessonNamesObtained[index]);
    if((lessonNamesObtained[index] != undefined) && (lessonNamesObtained[index] == 1)) { addLessons(lang,index); return; }
    getLessonNames(lang,index); 
    var inter;
    freezeMainWindow();
    inter = setInterval( function() {
    if(lessonNamesObtained[index] == 1)
    {
	inter = clearInterval(inter);     
        unfreezeMainWindow(); 
        addLessons(lang,index);
    }
    },500);
}

function addLessons(lang,index)
{ 
    document.getElementById("LearnSanketi").style["display"] = "block" ;

    var parent1 = document.getElementById("learnSimpleLessons");
    var parent2 = document.getElementById("learnIntermediateLessons");
    var parent3 = document.getElementById("learnComplexLessons");
    removeAllChildNodes(parent1);
    removeAllChildNodes(parent2);
    removeAllChildNodes(parent3);

    var lessonArray = lessonNames[index];
    var simpleLessonArray = [];
    var intermediateLessonArray = [];
    var complexLessonArray = [];
    simpleLessonArrayNames = '';
    intermediateLessonArrayNames = '';
    complexLessonArrayNames = '';

    for(var lessonIndex=0; lessonIndex<lessonArray.length; lessonIndex++)
    {
       var name = lessonArray[lessonIndex];
       switch(name[0])
       {
         case 'S': 
                  simpleLessonArray.push(name); 
                  if(simpleLessonArrayNames != '')
                    simpleLessonArrayNames += ',';
                  simpleLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".aac" + ",";
                  simpleLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".vtt";
                  break;
         case 'M': 
                  intermediateLessonArray.push(name); 
                  if(intermediateLessonArrayNames != '')
                    intermediateLessonArrayNames += ',';
                  intermediateLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".aac" + ",";
                  intermediateLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".vtt";
                  break;
         case 'C': 
                  complexLessonArray.push(name); 
                  if(complexLessonArrayNames != '')
                    complexLessonArrayNames += ',';
                  complexLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".aac" + ",";
                  complexLessonArrayNames += BASE_AUDIO_FOLDER.slice(2) + AUDIO_FOLDER_LESSONS + "/" + lang + "/" + name + ".vtt";
                  break;
       }
    }

    addClassifiedLessons(lang,simpleLessonArray,parent1);
    addClassifiedLessons(lang,intermediateLessonArray,parent2);
    addClassifiedLessons(lang,complexLessonArray,parent3);
}

function addClassifiedLessons(lang,lessonArray,parent)
{
    var lessonUL = document.createElement("UL");
    lessonUL.setAttribute("id", "sanketiLessons");
    parent.appendChild(lessonUL);
    for(var lessonIndex=0; lessonIndex<lessonArray.length; lessonIndex++)
    {
       var lessonNode = document.createElement("LI");   
       var lessonTextNode = document.createElement("a");
       lessonTextNode.appendChild(document.createTextNode(lessonArray[lessonIndex].slice(2)));
       lessonTextNode.href = "#";
       lessonTextNode.style["text-decoration"] = "none";
       lessonTextNode.style["color"] = "#FF5733";
       lessonTextNode.title = SERVER_DATA_AUDIO_LESSONS + lang + "/" + lessonArray[lessonIndex] ;
       lessonTextNode.setAttribute("onclick", "showAndPlayAudio(event,this)");
       lessonNode.appendChild(lessonTextNode);
       lessonUL.appendChild(lessonNode);
    }
}

function addTricksTableHeader(tRow,name)
{
    var tricksTableHeader = document.createElement('TH');
    tRow.appendChild(tricksTableHeader);
    var text = name;
    if(name == "Kannada") text = name + " " +"(ಕನ್ನಡ)"; 
    else if(name == "Sanketi") text = name + " " + "(ಸಂಕೇತಿ)";
    tricksTableHeader.appendChild(document.createTextNode(text));
}

function showTricks()
{
    unloadAll();
    clearScreen();
    var wait = document.getElementById("WaitForTricks");
    wait.innerHTML = "Please wait (ಸ್ವಲ್ಪ ತಾಳಿ) ...";

    var tricksKannadaDiv = document.getElementById("Trick_Similarity_Kannada"); 
    var tricksReplaceAwithODiv = document.getElementById("Trick_Replace_a_with_o");
    var tricksReplaceUwithIDiv = document.getElementById("Trick_Replace_u_with_i");
    var tricksReplaceHwithPDiv = document.getElementById("Trick_Replace_h_with_p");
    var tricksReplaceBwithVDiv = document.getElementById("Trick_Replace_b_with_v");
    var tricksMoreOnKannadaSanketiConnectionVDiv = document.getElementById("Trick_More_on_Kannada_Sanketi_Connection");

    if( kannada_sanketi_similar_words.length == 0)
      get_kannada_sanketi_similar_words();

    var inter = setInterval( function() {
    if(kannada_sanketi_similar_words.length) {
    clearInterval(inter); 
    populateTricksTable(kannada_sanketi_similar_words,tricksKannadaDiv);
    if(kannada_sanketi_replace_a_with_o_words.length == 0)
      get_kannada_sanketi_replace_letter_words('last', 'o', kannada_sanketi_replace_a_with_o_words); 
    populateTricksTable(kannada_sanketi_replace_a_with_o_words,tricksReplaceAwithODiv);
    if(kannada_sanketi_replace_u_with_i_words.length == 0)
      get_kannada_sanketi_replace_letter_words('last', 'i', kannada_sanketi_replace_u_with_i_words); 
    populateTricksTable(kannada_sanketi_replace_u_with_i_words,tricksReplaceUwithIDiv);
    if(kannada_sanketi_replace_h_with_p_words.length == 0)
      get_kannada_sanketi_replace_letter_words('first', 'p', kannada_sanketi_replace_h_with_p_words); 
    populateTricksTable(kannada_sanketi_replace_h_with_p_words,tricksReplaceHwithPDiv);
    if(kannada_sanketi_replace_b_with_v_words.length == 0)
      get_kannada_sanketi_replace_letter_words('first', 'v', kannada_sanketi_replace_b_with_v_words); 
    populateTricksTable(kannada_sanketi_replace_b_with_v_words,tricksReplaceBwithVDiv);
    if(kannada_sanketi_replace_last_letter_words.length == 0)
      replaceLetterToGetNewWord('last', kannada_sanketi_replace_last_letter_words); 
    removeAllChildNodes(tricksMoreOnKannadaSanketiConnectionVDiv);
    addTitleFor_tricksMoreOnKannadaSanketiConnectionVDiv(tricksMoreOnKannadaSanketiConnectionVDiv,"Replace last letter (ಕೊನೆ ಅಕ್ಷರ ಬದಲಾಯಿಸಿ)");
    populateTricksTable(kannada_sanketi_replace_last_letter_words,tricksMoreOnKannadaSanketiConnectionVDiv,0);
    if(kannada_sanketi_replace_first_letter_words.length == 0)
      replaceLetterToGetNewWord('first', kannada_sanketi_replace_first_letter_words); 
    addTitleFor_tricksMoreOnKannadaSanketiConnectionVDiv(tricksMoreOnKannadaSanketiConnectionVDiv,"Replace first letter (ಮೊದಲನೆ ಅಕ್ಷರ ಬದಲಾಯಿಸಿ)");
    populateTricksTable(kannada_sanketi_replace_first_letter_words,tricksMoreOnKannadaSanketiConnectionVDiv,0);
    if(kannada_sanketi_replace_last_two_letters_words.length == 0)
      replaceTwoLettersToGetNewWord('last', kannada_sanketi_replace_last_two_letters_words); 
    addTitleFor_tricksMoreOnKannadaSanketiConnectionVDiv(tricksMoreOnKannadaSanketiConnectionVDiv,"Replace last two letters (ಕೊನೆ ಎರಡು ಅಕ್ಷರಗಳನ್ನು ಬದಲಾಯಿಸಿ)");
    populateTricksTable(kannada_sanketi_replace_last_two_letters_words,tricksMoreOnKannadaSanketiConnectionVDiv,0);
    if(kannada_sanketi_replace_first_two_letters_words.length == 0)
      replaceTwoLettersToGetNewWord('first', kannada_sanketi_replace_first_two_letters_words); 
    addTitleFor_tricksMoreOnKannadaSanketiConnectionVDiv(tricksMoreOnKannadaSanketiConnectionVDiv,"Replace first two letters (ಮೊದಲನೆ ಎರಡು ಅಕ್ಷರಗಳನ್ನು ಬದಲಾಯಿಸಿ)");
    populateTricksTable(kannada_sanketi_replace_first_two_letters_words,tricksMoreOnKannadaSanketiConnectionVDiv,0);
    var tamilTable = document.getElementById("Tricks_Tamil_Table");
    tamilRowCount = $("#Tricks_Tamil_Table tr").length - 1; //opt out header of table
    tamilTable.appendChild(createCaptionForTable("Tricks_table_caption", "Total =  " + tamilRowCount.toString(), "Tricks_data", " (ಮೊತ್ತ = "  + tamilRowCount.toString() + ")"));    
    wait.innerHTML = "";
    document.getElementById("Tricks").style["display"] = "block" ;
    }
   }, 500);
}

function get_kannada_sanketi_similar_words()
{
    if(fileCount < Num_Alphabets) { retrieveDataOnce(); }
    var inter = setInterval( function() {
    if(dataRetrieved) {
    clearInterval(inter);
    for(var i=0; i<Num_Alphabets; i++)
    {
       var array = encoded_array[i];
       var length = array.length;
       for(var j=0; j<length; j++)
       {
         var row = array[j]; 
         if(row[BS_WORD_COLUMN_ENGLISH_FONT] == "") continue;
         if(row[BS_WORD_COLUMN_ENGLISH_FONT] == row[KANNADA_WORD_COLUMN_ENGLISH_FONT])
         {
           var match = [];
           match.push(row[ENGLISH_WORD_COLUMN]);
           match.push(row[KANNADA_WORD_COLUMN_ENGLISH_FONT] + "(" + row[KANNADA_WORD_COLUMN_KANNADA_FONT] + ")");
           match.push(row[BS_WORD_COLUMN_ENGLISH_FONT] + "(" + row[BS_WORD_COLUMN_KANNADA_FONT] + ")");       
           kannada_sanketi_similar_words.push(match);     
         }
       }
    }
    }
   }, 500);
}

function get_kannada_sanketi_replace_letter_words(index, letter, arr)
{
    for(var i=0; i<Num_Alphabets; i++)
    {
       var array = encoded_array[i];
       var length = array.length;
       for(var j=0; j<length; j++)
       {
         var row = array[j];
         var kannadaWord = row[KANNADA_WORD_COLUMN_ENGLISH_FONT];
         var newWord = "";
         var len = kannadaWord.length;
         if(index == 'last')
         {
           if(kannadaWord.charAt(len-1) == letter) continue;
           newWord = kannadaWord.slice(0,len-1); 
           newWord = newWord + letter;
         }
         else if(index == 'first')
         {
           if(kannadaWord.charAt(0) == letter) continue;
           newWord = kannadaWord.slice(1,len); 
           newWord = letter + newWord ;
         }

         if(row[BS_WORD_COLUMN_ENGLISH_FONT] == newWord)
         {
           var match = [];
           match.push(row[ENGLISH_WORD_COLUMN]);
           match.push(row[KANNADA_WORD_COLUMN_ENGLISH_FONT] + "(" + row[KANNADA_WORD_COLUMN_KANNADA_FONT] + ")");
           match.push(row[BS_WORD_COLUMN_ENGLISH_FONT] + "(" + row[BS_WORD_COLUMN_KANNADA_FONT] + ")");       
           arr.push(match);     
         }
       }
    }
}

function createCaptionForTable(englishClass,englishText,kannadaClass,kannadaText)
{
    var caption = document.createElement('caption');
    caption.setAttribute("class", englishClass);
    caption.appendChild(document.createTextNode(englishText));
    var kan = document.createElement("span");
    kan.setAttribute("class", kannadaClass);
    kan.appendChild(document.createTextNode(kannadaText));
    caption.appendChild(kan);
    return caption;
}

function populateTricksTable(array, div, clear)
{
if(clear === undefined)
    clear = 1;
    var tricksTable = document.createElement("TABLE");
    tricksTable.setAttribute("class", "Tricks_table");
    tricksTable.appendChild(createCaptionForTable("Tricks_table_caption", "Total =  " + array.length.toString(),  "Tricks_data", " (ಮೊತ್ತ = "  + array.length.toString() + ")"));
    if(clear)
      removeAllChildNodes(div);
    div.appendChild(tricksTable);
    var tricksTableBody = document.createElement('TBODY');
    tricksTable.appendChild(tricksTableBody);
    var tricksTableRow = document.createElement('TR');
    tricksTableBody.appendChild(tricksTableRow);
    addTricksTableHeader(tricksTableRow,"English");
    addTricksTableHeader(tricksTableRow,"Kannada");
    addTricksTableHeader(tricksTableRow,"Sanketi");

    var len = array.length;
    for(var n=0;n<len;n++)
    {
        var data = array[n];
        tricksTableRow = document.createElement('TR');
        tricksTableBody.appendChild(tricksTableRow);
        for(var m=0;m<3;m++)
        {
   	  var tricksTableData = document.createElement('TD');
          if(m == 0)
           tricksTableData.appendChild(document.createTextNode(data[m])); 
          else
          {
            var index = data[m].indexOf('(');
            var text1 = data[m].slice(0,index);
            var text2 = data[m].slice(index);
            tricksTableData.appendChild(document.createTextNode(text1)); 
            var kan = document.createElement("span");
            kan.setAttribute("class","Tricks_data");
            kan.appendChild(document.createTextNode(" " + text2));
            tricksTableData.appendChild(kan);
          }
	  tricksTableRow.appendChild(tricksTableData);
        }
     }
}

function replaceLetterToGetNewWord(index, arr)
{
    for(var i=0; i<Num_Alphabets; i++)
    {
       var array = encoded_array[i];
       var length = array.length;
       for(var j=0; j<length; j++)
       {
         var row = array[j];
         var kannadaWord = row[KANNADA_WORD_COLUMN_ENGLISH_FONT];
         var newWord = "";
         if(index == 'last')
          newWord = kannadaWord.slice(0,kannadaWord.length-1); 
         else if(index == 'first')
          newWord = kannadaWord.slice(1,kannadaWord.length); 

         for(var k=0; k<Num_Alphabets; k++)
         {
            var replaceLetter = String.fromCharCode(97 + k);
            var matchWord = "";
            if(index == 'last')
             if((replaceLetter == 'o') || (replaceLetter == 'i')) continue;
            if(index == 'last')
             matchWord = newWord +  replaceLetter;
            else if(index == 'first')
             matchWord = replaceLetter + newWord;
            if(matchWord == kannadaWord) continue;
            if(row[BS_WORD_COLUMN_ENGLISH_FONT] == matchWord)
            {
              var match = [];
              match.push(row[ENGLISH_WORD_COLUMN]);
              match.push(row[KANNADA_WORD_COLUMN_ENGLISH_FONT] + "(" + row[KANNADA_WORD_COLUMN_KANNADA_FONT] + ")");
              match.push(row[BS_WORD_COLUMN_ENGLISH_FONT] + "(" + row[BS_WORD_COLUMN_KANNADA_FONT] + ")");       
              arr.push(match);     
            }
         }
       } 
    }
}

function replaceTwoLettersToGetNewWord(index, arr)
{
    for(var i=0; i<Num_Alphabets; i++)
    {
       var array = encoded_array[i];
       var length = array.length;
       for(var j=0; j<length; j++)
       {
         var row = array[j];
         var kannadaWord = row[KANNADA_WORD_COLUMN_ENGLISH_FONT];
         var newWord = "";
         if(index == 'last')
          newWord = kannadaWord.slice(0,kannadaWord.length-2); 
         else if(index == 'first')
          newWord = kannadaWord.slice(2,kannadaWord.length); 

         for(var k=0; k<Num_Alphabets; k++)
         {
           for(var l=0; l<Num_Alphabets; l++)
           {
            var replaceLetter = String.fromCharCode(97 + k);
	    replaceLetter += String.fromCharCode(97 + l); 

            if((index == 'last') && ((kannadaWord.charAt(kannadaWord.length-2) == String.fromCharCode(97 + k)) && (kannadaWord.charAt(kannadaWord.length-1) != String.fromCharCode(97 + l)))) continue;
            if((index == 'first') && ((kannadaWord.charAt(1) == String.fromCharCode(97 + l)) && (kannadaWord.charAt(0) != String.fromCharCode(97 + k)))) continue;

            var matchWord = "";
            if(index == 'last')
             matchWord = newWord +  replaceLetter;
            else if(index == 'first')
             matchWord = replaceLetter + newWord;
            if(matchWord == kannadaWord) continue;//console.log(kannadaWord + "   "  + matchWord);
            if(row[BS_WORD_COLUMN_ENGLISH_FONT] == matchWord)
            {
              var match = [];
              match.push(row[ENGLISH_WORD_COLUMN]);
              match.push(row[KANNADA_WORD_COLUMN_ENGLISH_FONT] + "(" + row[KANNADA_WORD_COLUMN_KANNADA_FONT] + ")");
              match.push(row[BS_WORD_COLUMN_ENGLISH_FONT] + "(" + row[BS_WORD_COLUMN_KANNADA_FONT] + ")");       
              arr.push(match);     
            }
           }
         }
       } 
    }
}

function addTitleFor_tricksMoreOnKannadaSanketiConnectionVDiv(div,title)
{
  if(div.hasChildNodes())
  {
    var hr = document.createElement("hr");
    div.appendChild(hr);
  }

  var text = document.createElement("h1");
  text.setAttribute("class", "Tricks_data_heading");
  text.innerHTML = title;
  div.appendChild(text);
}

function print_css(element)
{
   var css_data = '';
   var css_obj = getComputedStyle(element);
          
   for (var i = 0; i < css_obj.length; i++) {
        css_data +=
                css_obj[i] + ':' + 
                css_obj.getPropertyValue(css_obj[i])
                + ';<br>';
   }
   console.log(css_data);
}

function showVariations()
{
    unloadAll();
    clearScreen();
    document.getElementById("Variations").style.display = "block";

    var caption = document.getElementsByClassName("Variations_table_caption"); 
    if(!caption.length) {
    var length ; 
    var table;

    table = document.getElementById("Variations_Table_1"); 
    length = $("#Variations_Table_1 tr").length - 2 - (7*3); 
    table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "TENSES (ಕಾಲಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n"));   

    table = document.getElementById("Variations_Table_2");
    length = $("#Variations_Table_2 tr").length - (2 + (7*3)); 

    if(isMobile280())
     table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Singular Plural forms\n(ಏಕವಚನ ಬಹುವಚನ ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n"));   
    else
     table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Singular Plural forms (ಏಕವಚನ ಬಹುವಚನ ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n"));   

    table = document.getElementById("Variations_Table_3");
    length = $("#Variations_Table_3 tr").length - 2 - (7*3);
    table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Gender forms (ಲಿಂಗ ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n"));   

    table = document.getElementById("Variations_Table_4");

    if(isMobile())
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Different ways of addressing\n(ಸಂಬೋಧಿಸುವ ಹಲವು ಬಗೆಗಳು)\n\n", "BS(ಬೆ)\u000a", "", ""));     
    else
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Different ways of addressing (ಸಂಬೋಧಿಸುವ ಹಲವು ಬಗೆಗಳು)\n\n", "BS(ಬೆ)\u000a", "", ""));   

    table = document.getElementById("Variations_Table_5");
    length = $("#Variations_Table_5 tr").length - 1;

    if(isMobile280())
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Different usages of the same word\n(ಒಂದೇ ಪದದ ಹಲವು ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically\nin asc or desc order\n(ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ\nವಿಂಗಡಿಸಲು ಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   
    else if(isMobile())
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Different usages of the same word\n(ಒಂದೇ ಪದದ ಹಲವು ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically in asc or desc order\n(ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ ವಿಂಗಡಿಸಲು\nಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   
    else
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Different usages of the same word (ಒಂದೇ ಪದದ ಹಲವು ರೂಪಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically in asc or desc order (ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ ವಿಂಗಡಿಸಲು ಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   

    table = document.getElementById("Variations_Table_6");
    length = $("#Variations_Table_6 tr").length - 2;

    if(isMobile280())
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Opposites (ವಿರುದ್ಧ ಪದಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically\nin asc or desc order\n(ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ\nವಿಂಗಡಿಸಲು ಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   
    else if(isMobile())
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Opposites (ವಿರುದ್ಧ ಪದಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically in asc or desc order\n(ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ ವಿಂಗಡಿಸಲು\nಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   
    else
      table.appendChild(createCaptionForVariationsTable("Variations_table_caption", "Tricks_data", "Opposites (ವಿರುದ್ಧ ಪದಗಳು)\u000a\u000a", "BS(ಬೆ)\u000a", "Total (ಮೊತ್ತ)  =  " + length.toString(), " (" + length.toString() + ")" + "\n", "Click on the header to sort alphabetically in asc or desc order (ಆರೋಹಣ ಅಥವ ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವರ್ಣಮಾಲೆಯಂತೆ ವಿಂಗಡಿಸಲು ಮೊದಲನೆ ಸಾಲಿನ ಮೇಲೆ ಒತ್ತಿ)"));   
    }

    document.getElementById("VariationsPageDefaultOpen").click();
}

function createCaptionForVariationsTable(englishClass,kannadaClass,text1,lang,text2,text3,text4)
{
    if(text4 === undefined)
      text4 = "";

    var caption = document.createElement('caption');
    caption.setAttribute("class", englishClass);
    caption.appendChild(document.createTextNode(text1));
    var langfont = document.createElement("span");
    langfont.style["font-size"] = "large";
    langfont.style["color"] = "#FF0099";
    langfont.appendChild(document.createTextNode(lang));
    caption.appendChild(langfont);
    var smallfont = document.createElement("span");
    smallfont.style["font-size"] = "medium";
    smallfont.style["color"] = "#FF6699";
    smallfont.appendChild(document.createTextNode(text2));
    var kan = document.createElement("span");
    kan.setAttribute("class", kannadaClass);
    kan.style["font-size"] = "medium";
    kan.appendChild(document.createTextNode(text3));
    smallfont.appendChild(kan);
    caption.appendChild(smallfont);
    var smallerfont = document.createElement("span");
    smallerfont.style["font-size"] = "small";
    smallerfont.style["font-weight"] = "normal";
    smallerfont.style["color"] = "grey";
    smallerfont.appendChild(document.createTextNode(text4));
    caption.appendChild(smallerfont);
    return caption;
}

function openReference()
{
    unloadAll();
    document.getElementById("iframe_samples").style["display"] = "block"; 
}

function searchExcel() 
{
    const searchWord = document.getElementById('text').value; 
    searchExcelFor(searchWord);
}

function displaySearchError(area)
{
   setPositionOfDataDisplay(area,400);
   area.innerHTML = "Sorry, found no match (ಕ್ಷಮಿಸಿ, ಯಾವುದೇ ಹೊಂದಾಣಿಕೆ ಕಂಡುಬಂದಿಲ್ಲ)";
}

function searchExcelFor(searchWord)
{
    var indexArray = [];
    var tempArray = [];
    var tempIndex = 0;
    var displayTable = document.getElementById('dictionaryTable');
    displayTable.innerHTML = "";
    displayTable.style["display"] = "block";

    for(searchIndex=0; searchIndex<Num_Alphabets; searchIndex++)
    {
    	 if(searchWord.startsWith(String.fromCharCode(LOWER_CASE_ASCII_START + searchIndex)) || searchWord.startsWith(String.fromCharCode(UPPER_CASE_ASCII_START + searchIndex)) || searchWord.startsWith('(')) {
	     search = searchColumn[searchIndex]; 
             if(searchWord.startsWith('('))
  	      search = searchColumn[Num_Alphabets]; 
             if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT)
  	        encoded = encoded_array[searchIndex];
             else
             {
                indexArray = findWordInEncodedArray(searchWord); 
                if((indexArray == null) || (indexArray.length == 0))
                {
          	  displaySearchError(displayTable);
                  return;
                }  
                tempArray = indexArray[tempIndex++];
                encoded = encoded_array[tempArray[0]];
             }
	     break;
	 }
    }

    if(searchIndex == Num_Alphabets)
    {
	displaySearchError(displayTable);
        return;
    }  

     if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT)
       c = search.indexOf(searchWord);
     else
       c = tempArray[1];

     if(c == -1)
     {
	displaySearchError(displayTable);
        return;
     }  

     var top = 360; 
  
     displayDataHeader(displayTable,top);
     top += 10;

     var count=1;
     while(c != -1)	{ 
       displayIndex(displayTable,count);
       displayDataTable(displayTable);
       displaySynonymns(displayTable,encoded[c][ENGLISH_WORD_COLUMN]);
       displayExamplesButton(displayTable,count);
       var examplesDiv = document.createElement('DIV');
       examplesDiv.setAttribute("id", "ExamplesArea"+count++);
       displayTable.appendChild(examplesDiv);
       displayExamples(examplesDiv);
       examplesDiv.style.display = "none";

       if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT)
          if(search[c].localeCompare(search[c+1]) == 0) c++; 
          else  c = -1 ;
       else
       {
          if(tempIndex < indexArray.length)
          {
                tempArray = indexArray[tempIndex++];
                encoded = encoded_array[tempArray[0]];
                c = tempArray[1];
          }
          else c = -1;
       }
     }
}

function setPositionOfDataDisplay(area,position)
{
   area.style["top"] = position + "px";
   if(isMobile())
     area.style["left"] = "0.625em";
   else
     area.style["left"] = "19.53vw";
   area.style["position"] = "absolute";
}

function displayDataHeader(area,position)
{
   setPositionOfDataDisplay(area,position);
   var span1 = document.createElement('span');
   span1.style.color = "DarkBlue"; 
   var bold1 = document.createElement('strong');
   var textnode1 = document.createTextNode(encoded[c][SANKETI_WORD_PART_OF_SPEECH].toUpperCase());
   bold1.appendChild(textnode1);
   span1.appendChild(bold1);
   area.appendChild(span1);
   var span2 = document.createElement('span');
   span2.style.color = "DarkBlue"; 
   span2.style["font-family"] = "Nudi Akshara-07";
   span2.style["font-size"] = 'medium' ;
   var bold2 = document.createElement('strong');
   var text = '';
   switch(encoded[c][SANKETI_WORD_PART_OF_SPEECH].toUpperCase())
   {
     case 'ADJECTIVE' : text = 'ವಿಶೇಷಣ' ; break;
     case 'NOUN' : text = 'ನಾಮಪದ' ; break;
     case 'VERB' : text = 'ಕ್ರಿಯಾಪದ' ; break;
     case 'ADVERB' : text = 'ಕ್ರಿಯಾವಿಶೇಷಣ' ; break;
     case 'PRONOUN' : text = 'ಸರ್ವನಾಮ' ; break;
     case 'PHRASE' : text = 'ನುಡಿಗಟ್ಟು' ; break;
   }
   var textnode2 = document.createTextNode(" (" + text + ")");
   bold2.appendChild(textnode2);
   span2.appendChild(bold2);
   area.appendChild(span2);
   area.appendChild(document.createElement("BR"));
   area.appendChild(document.createElement("BR"));
}

function displayIndex(area,index)
{
  var p = document.createElement("p");
  p.innerText = index+ ".";
  p.style.color = "black";
  p.style["font-weight"] = 'bold' ; 
  area.appendChild(p);
}

function displayDataTable(area)
{
   displayData(area,"Eng: ",encoded[c][ENGLISH_WORD_COLUMN],"",""); 
   displayData(area,"Kan: ",encoded[c][KANNADA_WORD_COLUMN_ENGLISH_FONT],encoded[c][KANNADA_WORD_COLUMN_KANNADA_FONT],""); 
   displayData(area,"BS: ","\u00a0\u00a0" + encoded[c][BS_WORD_COLUMN_ENGLISH_FONT],encoded[c][BS_WORD_COLUMN_KANNADA_FONT],encoded[c][AUDIO_BS_WORD]);
   displayData(area,"KS: ","\u00a0\u00a0" + encoded[c][KS_WORD_COLUMN_ENGLISH_FONT],encoded[c][KS_WORD_COLUMN_KANNADA_FONT],encoded[c][AUDIO_KS_WORD]);
   displayData(area,"LS: ","\u00a0\u00a0" + encoded[c][LS_WORD_COLUMN_ENGLISH_FONT],encoded[c][LS_WORD_COLUMN_KANNADA_FONT],encoded[c][AUDIO_LS_WORD]);
   displayData(area,"MS: ","\u00a0" + encoded[c][MS_WORD_COLUMN_ENGLISH_FONT],encoded[c][MS_WORD_COLUMN_KANNADA_FONT],encoded[c][AUDIO_MS_WORD]);
}

function getSynonymnList(word)
{
    var temp_encoded_array = [];
    var word1 = "";
    var synonymnList = [];
    var count = 0;
    for(var alpIndex=0; alpIndex<Num_Alphabets; alpIndex++)
    {
         temp_encoded_array = encoded_array[alpIndex];
         var length = temp_encoded_array.length;
         for(var index=0; index<length; index++)
         {
           var row = temp_encoded_array[index];
           word1 = row[ENGLISH_WORD_COLUMN];
           if(word1 == word)
           {
             if(encoded[c][languageColumn] != row[languageColumn])
             {
               synonymnList[count++] = row[languageColumn] + " (" + row[languageColumn+1] + ")" ;
             }
           }
         }
    }
    return synonymnList;
}

function showSynonymns(area,list)
{
   if(list.length == 0) return;

   area.appendChild(document.createElement("BR"));
   var synonymnSpan = displayDataLanguage("Synonymns (ಸಮಾನಾರ್ಥಕ ಪದಗಳು):");
   synonymnSpan.style.color = "green";
   synonymnSpan.style["font-size"] = '14px' ; 
   synonymnSpan.style["font-weight"] = 'bold';
   area.appendChild(synonymnSpan);
   area.appendChild(document.createElement("BR"));

   for(var n=0;n<list.length;)
   {
        var synonymnTableTextNode = document.createElement("a");
        synonymnTableTextNode.href = "#";
        synonymnTableTextNode.title = list[n];
        synonymnTableTextNode.id = "synonymnLinks";
        synonymnTableTextNode.style["text-decoration"] = "none";
        synonymnTableTextNode.style["font-size"] = "13px";
        synonymnTableTextNode.appendChild(document.createTextNode(list[n])); 
        area.appendChild(synonymnTableTextNode);
        area.appendChild(document.createElement("BR"));
        n++;
   }
   $(document).on("click", "#synonymnLinks", onClickSynonymns);
   area.appendChild(document.createElement("BR"));
}

function displaySynonymns(area,word)
{    
   showSynonymns(area,getSynonymnList(word));
}

function onClickSynonymns()
{
    var input = $(this).attr("title"); 
    searchExcelFor(input);
}

function displaySamplesTable(area,array)
{
   displayData(area,"Eng: ",array[ENGLISH_WORD_COLUMN],"",""); 
   displayData(area,"Kan: ",array[KANNADA_WORD_COLUMN_ENGLISH_FONT],array[KANNADA_WORD_COLUMN_KANNADA_FONT],"");
   displayData(area,"BS: ","\u00a0\u00a0" + array[BS_WORD_COLUMN_ENGLISH_FONT],array[BS_WORD_COLUMN_KANNADA_FONT],array[AUDIO_BS_WORD]);
   displayData(area,"KS: ","\u00a0\u00a0" + array[KS_WORD_COLUMN_ENGLISH_FONT],array[KS_WORD_COLUMN_KANNADA_FONT],array[AUDIO_KS_WORD]);
   displayData(area,"LS: ","\u00a0\u00a0" + array[LS_WORD_COLUMN_ENGLISH_FONT],array[LS_WORD_COLUMN_KANNADA_FONT],array[AUDIO_LS_WORD]);
   displayData(area,"MS: ","\u00a0" + array[MS_WORD_COLUMN_ENGLISH_FONT],array[MS_WORD_COLUMN_KANNADA_FONT],array[AUDIO_MS_WORD]);
}

function displayData(area,lang,data,kannadaText,audio)
{
   area.appendChild(displayDataLanguage(lang));
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0")); 
   area.appendChild(document.createTextNode(data));
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
   area.appendChild(displayKannadaData(kannadaText));
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0"));
   displayAudio(area,audio); 
   area.appendChild(document.createElement("BR"));
}

function displayDataLanguage(text)
{
   var span = document.createElement('span');
   span.style.color = "Crimson"; //From https://www.w3schools.com/tags/ref_colornames.asp
   span.style.fontStyle = "italic";
   span.appendChild(document.createTextNode(text));
   return span;
}

function displayKannadaData(text)
{
   var span = document.createElement('span');
   span.style["height"] = '10px' ;
   span.style["display"] = 'inline-block' ;

   if(text != '') {
   span.appendChild(document.createTextNode(text)); }
   return span;
}

function displayAudio(area,str)
{
     var audioFile;
     if((str == null) || (str == '#REF!')  || (str == '')) { return; }	       
     audioFile = SERVER_DATA + str.replace(/\\/g, "/"); 
     var link = document.createElement("a");
     link.href = "#";
     link.title = audioFile;
     link.setAttribute("onclick", "playAudio(event,this)");
     var img = document.createElement("IMG");
     img.setAttribute("src", "data/Images/Speaker.png");
     img.setAttribute("width", "15 px");
     link.appendChild(img);
     area.appendChild(link);  
}

function displayExamplesButton(area,count)
{
    var button = document.createElement('BUTTON');
    button.setAttribute("class", "ExamplesButton");
    button.style["border-radius"] = "25px";
    button.style["backgroundColor"] = "white";
    button.style["color"] = "black";
    button.style["border-color"] = "#e7e7e7";
    button.style["fontSize"] = "12px";
    button.title = count;
    button.setAttribute("onclick", "hideOrShowExamples(event,this)");
    var span = document.createElement('span');
    span.setAttribute("class", "glyphicon glyphicon-plus-sign");
    span.className = "glyphicon glyphicon-plus-sign";
    var text = document.createTextNode("Examples");
    span.appendChild(text);
    button.appendChild(span);
    area.appendChild(button);
    area.appendChild(document.createElement("BR"));
    area.appendChild(document.createElement("BR"));
}

function removeNonAlphanumericCharacters(str)
{
     if(str) {
     var newStr = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""); 
     return newStr.trim();
     }
     else return str;
}

function displaySearchWordInBold(area,data,searchWord,lang)
{
   var index = data.indexOf(searchWord);
   var word1 = data.substring(0,index);
   var word2 = data.substring(index+searchWord.length);
   if((word1 == '') && (word2 == '')) return;
   var span1 = document.createElement('span');
   var span2 = document.createElement('span');
   var span3 = document.createElement('span');
   if(lang == "kan") {
     span1.style["font-weight"] = 'bold';
     span3.style["font-weight"] = 'bold';
   }
   var bold = document.createElement('strong');
   bold.style["color"] = "red";
   if(word1 != '')
     span1.appendChild(document.createTextNode(word1 + " "));
   bold.appendChild(document.createTextNode(searchWord));
   span2.appendChild(bold);
   if(word2 != '')
     span3.appendChild(document.createTextNode(" " + word2));

   area.appendChild(span1);
   area.appendChild(span2);
   area.appendChild(span3);
}

function displayExample(area,lang,data,kannadaText,audio)
{
   area.appendChild(displayDataLanguage(lang));
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0")); 
   displaySearchWordInBold(area,data,encoded[c][BS_WORD_COLUMN_ENGLISH_FONT],"eng");
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
   displaySearchWordInBold(area,kannadaText,encoded[c][BS_WORD_COLUMN_KANNADA_FONT],"kan");
   area.appendChild(document.createTextNode("\u00a0\u00a0\u00a0"));
   displayAudio(area,audio); 
   area.appendChild(document.createElement("BR"));
}

function displayExamples(area)
{
   displayData(area,"Eng: ",encoded[c][EXAMPLE_SENTENCE_ENGLISH],"","");
   displayData(area,"Kan: ",encoded[c][EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT],encoded[c][EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT],"");   
   displayExample(area,"BS: ", encoded[c][EXAMPLE_SENTENCE_BS_ENGLISH_FONT],encoded[c][EXAMPLE_SENTENCE_BS_KANNADA_FONT],encoded[c][AUDIO_BS_EXAMPLE_SENTENCE]);
   displayExample(area,"KS: ", encoded[c][EXAMPLE_SENTENCE_KS_ENGLISH_FONT],encoded[c][EXAMPLE_SENTENCE_KS_KANNADA_FONT],encoded[c][AUDIO_KS_EXAMPLE_SENTENCE]);
   displayExample(area,"LS: ", encoded[c][EXAMPLE_SENTENCE_LS_ENGLISH_FONT],encoded[c][EXAMPLE_SENTENCE_LS_KANNADA_FONT],encoded[c][AUDIO_LS_EXAMPLE_SENTENCE]);
   displayExample(area,"MS: ", encoded[c][EXAMPLE_SENTENCE_MS_ENGLISH_FONT],encoded[c][EXAMPLE_SENTENCE_MS_KANNADA_FONT],encoded[c][AUDIO_MS_EXAMPLE_SENTENCE]);
}

function hideOrShowExamples(event,button)
{
   var id= button.title; 
   var examplesArea = document.getElementById("ExamplesArea"+id)
   if(button.style.backgroundColor == "grey")
   {
      button.style["backgroundColor"] = "white";
      button.style["color"] = "black";
      examplesArea.style.display = "none";
   }
   else
   {
      button.style["backgroundColor"] = "grey";
      button.style["color"] = "white";
      examplesArea.style.display = "block";
   }
}

function generateDataTable(className, position)
{
    var dataTable = document.createElement("TABLE");
    dataTable.setAttribute("class", className);
    dataTable.setAttribute("id", className);
    dataTable.style["top"] = position + "px";
    var dataTableBody = document.createElement('TBODY');
    dataTable.appendChild(dataTableBody);
    if(isMobile())
     createDataTableForMobile(dataTable);
    else
    {
      dataTableBody.appendChild(createDataTableHeaderRow());
      dataTableBody.appendChild(createDataTableDataRows());
    }
    return dataTable;
}

function generateExampleTable(className, position)
{
    var exampleTable = document.createElement("TABLE");
    exampleTable.setAttribute("class", className);
    exampleTable.setAttribute("id", className);
    exampleTable.style["top"] = position + "px";
    var caption = exampleTable.createCaption();
    caption.innerHTML = "<b>Example sentence:</b>" ;
    caption.style.captionSide = "top";
    caption.style["text-align"] = "left";
    if(isMobile())
      caption.style["font-size"] = "2em";
    else
      caption.style.font = "font: 1rem 'Fira Sans', sans-serif";
    var exampleTableBody = document.createElement('TBODY');
    exampleTable.appendChild(exampleTableBody);
    createExampleTableRows(exampleTableBody);	
    return exampleTable;
}

function createDataTableHeaderRow()
{
     var tr = document.createElement('TR');
     tr.appendChild(createDataTableHeader("English"));
     tr.appendChild(createDataTableHeader("Kannada" + " " + "(English)"));
     tr.appendChild(createDataTableHeader("Kannada" + " " + "(Kannada)"));
     tr.appendChild(createDataTableHeader("BS" + " " + "(English)"));
     tr.appendChild(createDataTableHeader("BS" + " " + "(Kannada)"));
     tr.appendChild(createDataTableHeader("Audio"));
     if(encoded[c][KS_WORD_COLUMN_ENGLISH_FONT]) {
     tr.appendChild(createDataTableHeader("KS" + " " + "(English)"));
     tr.appendChild(createDataTableHeader("KS" + " " + "(Kannada)"));
     tr.appendChild(createDataTableHeader("Audio"));
     }
     if(encoded[c][LS_WORD_COLUMN_ENGLISH_FONT]) {
     tr.appendChild(createDataTableHeader("LS" + " " + "(English)"));
     tr.appendChild(createDataTableHeader("LS" + " " + "(Kannada)"));
     tr.appendChild(createDataTableHeader("Audio"));
     }
     if(encoded[c][MS_WORD_COLUMN_ENGLISH_FONT]) {
     tr.appendChild(createDataTableHeader("MS" + " " + "(English)"));
     tr.appendChild(createDataTableHeader("MS" + " " + "(Kannada)"));
     tr.appendChild(createDataTableHeader("Audio"));
     }
     tr.appendChild(createDataTableHeader("Type"));
     tr.appendChild(createDataTableHeader("Category"));
     return tr;
}

function createDataTableHeader(str)
{
    var name = str.split(" ");
    var th = document.createElement('TH');
    th.style["text-align"] = "center";
    if(isMobile())
      th.style["font-size"] = "1.3em";
    else
      th.style["font-size"] = "0.8em";
    var b = document.createElement("B");
    var t = document.createTextNode(name[0]);
    b.appendChild(t);
    th.appendChild(b);
    if(name[1]) { 
      th.appendChild(document.createElement("BR"));
      th.appendChild(document.createTextNode(name[1])); 
    }
    return th;
}

function createDataTableDataRows()
{
   var tr = document.createElement('TR');
   tr.appendChild(createDataTableCell(encoded[c][ENGLISH_WORD_COLUMN]));
   tr.appendChild(createDataTableCell(encoded[c][KANNADA_WORD_COLUMN_ENGLISH_FONT]));
   tr.appendChild(createKannadaCellForDataTable(encoded[c][KANNADA_WORD_COLUMN_KANNADA_FONT]));
   tr.appendChild(createDataTableCell(encoded[c][BS_WORD_COLUMN_ENGLISH_FONT]));
   tr.appendChild(createKannadaCellForDataTable(encoded[c][BS_WORD_COLUMN_KANNADA_FONT]));
   tr.appendChild(createAudioCellForDataTable(encoded[c][AUDIO_BS_WORD]));
   if(encoded[c][KS_WORD_COLUMN_ENGLISH_FONT]) {
   tr.appendChild(createDataTableCell(encoded[c][KS_WORD_COLUMN_ENGLISH_FONT]));
   tr.appendChild(createKannadaCellForDataTable(encoded[c][KS_WORD_COLUMN_KANNADA_FONT]));
   tr.appendChild(createAudioCellForDataTable(encoded[c][AUDIO_KS_WORD]));
   }
   if(encoded[c][LS_WORD_COLUMN_ENGLISH_FONT]) {
   tr.appendChild(createDataTableCell(encoded[c][LS_WORD_COLUMN_ENGLISH_FONT]));
   tr.appendChild(createKannadaCellForDataTable(encoded[c][LS_WORD_COLUMN_KANNADA_FONT]));
   tr.appendChild(createAudioCellForDataTable(encoded[c][AUDIO_LS_WORD]));
   }
   if(encoded[c][MS_WORD_COLUMN_ENGLISH_FONT]) {
   tr.appendChild(createDataTableCell(encoded[c][MS_WORD_COLUMN_ENGLISH_FONT]));
   tr.appendChild(createKannadaCellForDataTable(encoded[c][MS_WORD_COLUMN_KANNADA_FONT]));
   tr.appendChild(createAudioCellForDataTable(encoded[c][AUDIO_MS_WORD]));
   }
   tr.appendChild(createDataTableCell(encoded[c][SANKETI_WORD_PART_OF_SPEECH]));
   tr.appendChild(createDataTableCell(encoded[c][SANKETI_WORD_CATEGORY]));
   return tr;
}

function createDataTableCell(str)
{
   var td = document.createElement('TD');
   td.appendChild(document.createTextNode(str));
   return td;
}

function createKannadaCellForDataTable(str)
{
    var td = document.createElement('TD');
    var ts = document.createElement("SPAN");
    if(isMobile())
      ts.style["font-size"] = 'small';
    else
      ts.style["font-size"] = 'large' ;
    ts.appendChild(document.createTextNode(str));
    td.appendChild(ts);
    return td; 
}

function createAudioCellForDataTable(str)
{
     var audioFile;
     var td = document.createElement('TD');
     td.style["width"] = "30px";
     if((str == null) || (str == '#REF!')) { audioFile = ''; }	       
     else { audioFile = SERVER_DATA + str.replace(/\\/g, "/"); }
     if(audioFile.length == 0) { td.appendChild(document.createTextNode("NA")); return td; }
     var link = document.createElement("a");
     link.href = "#";
     link.title = audioFile;
     link.setAttribute("onclick", "playAudio(event,this)");
     var img = document.createElement("IMG");
     img.setAttribute("src", "data/Images/Speaker.png");
     if(isMobile())
       img.setAttribute("width", "15 px");
     else
       img.setAttribute("width", "30 px");
     link.appendChild(img);
     td.appendChild(link);
     return td;  
}

function createDataTableForMobile(table)
{
    table.appendChild(createExampleTableRow("English", encoded[c][ENGLISH_WORD_COLUMN]));
    table.appendChild(createExampleTableRow("Kannada" + " " + "(English)", encoded[c][KANNADA_WORD_COLUMN_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("Kannada" + " " + "(Kannada)", encoded[c][KANNADA_WORD_COLUMN_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("BS" + " " + "(English)", encoded[c][BS_WORD_COLUMN_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("BS" + " " + "(Kannada)", encoded[c][BS_WORD_COLUMN_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_BS_WORD]));
    if(encoded[c][KS_WORD_COLUMN_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("KS" + " " + "(English)", encoded[c][KS_WORD_COLUMN_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("KS" + " " + "(Kannada)", encoded[c][KS_WORD_COLUMN_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_KS_WORD]));
    }
    if(encoded[c][LS_WORD_COLUMN_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("LS" + " " + "(English)", encoded[c][LS_WORD_COLUMN_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("LS" + " " + "(Kannada)", encoded[c][LS_WORD_COLUMN_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_LS_WORD]));
    }
    if(encoded[c][MS_WORD_COLUMN_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("MS" + " " + "(English)", encoded[c][MS_WORD_COLUMN_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("MS" + " " + "(Kannada)", encoded[c][MS_WORD_COLUMN_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_MS_WORD]));
    }
}

function createExampleTableRows(table)
{
    table.appendChild(createExampleTableRow("English", encoded[c][EXAMPLE_SENTENCE_ENGLISH]));
    table.appendChild(createExampleTableRow("Kannada" + " " + "(English)", encoded[c][EXAMPLE_SENTENCE_KANNADA_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("Kannada" + " " + "(Kannada)", encoded[c][EXAMPLE_SENTENCE_KANNADA_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("BS" + " " + "(English)", encoded[c][EXAMPLE_SENTENCE_BS_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("BS" + " " + "(Kannada)", encoded[c][EXAMPLE_SENTENCE_BS_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_BS_EXAMPLE_SENTENCE]));
    if(encoded[c][EXAMPLE_SENTENCE_KS_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("KS" + " " + "(English)", encoded[c][EXAMPLE_SENTENCE_KS_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("KS" + " " + "(Kannada)", encoded[c][EXAMPLE_SENTENCE_KS_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_KS_EXAMPLE_SENTENCE]));
    }
    if(encoded[c][EXAMPLE_SENTENCE_LS_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("LS" + " " + "(English)", encoded[c][EXAMPLE_SENTENCE_LS_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("LS" + " " + "(Kannada)", encoded[c][EXAMPLE_SENTENCE_LS_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_LS_EXAMPLE_SENTENCE]));
    }
    if(encoded[c][EXAMPLE_SENTENCE_MS_ENGLISH_FONT]) {
    table.appendChild(createExampleTableRow("MS" + " " + "(English)", encoded[c][EXAMPLE_SENTENCE_MS_ENGLISH_FONT]));
    table.appendChild(createExampleTableRow("MS" + " " + "(Kannada)", encoded[c][EXAMPLE_SENTENCE_MS_KANNADA_FONT]));
    table.appendChild(createExampleTableRow("Audio", encoded[c][AUDIO_MS_EXAMPLE_SENTENCE]));
    }
}

function createExampleTableRow(headerStr, dataStr)
{
     var tr = document.createElement('TR');
     tr.appendChild(createDataTableHeader(headerStr));
     if(headerStr.includes("\(Kannada\)")) { tr.appendChild(createKannadaCellForDataTable(dataStr)); }
     else if(headerStr.localeCompare("Audio") == 0) { tr.appendChild(createAudioCellForDataTable(dataStr));}
     else { tr.appendChild(createDataTableCell(dataStr)); }
     return tr;
}

function createEnglishAlphabetLinks()
{
     glossaryEnglishUL = document.createElement("UL");
     glossaryEnglishUL.setAttribute("id", "alphabetList");
     glossaryEnglishUL.setAttribute("class", "alphabetList");
     glossaryEnglishUL.style["list-style"] = "none";
     glossaryEnglishUL.style["display"] = "inline-block";
     document.getElementById("glossaryEnglishAlphabets").appendChild(glossaryEnglishUL);
     var heading = document.getElementById("alphabetList") ;
     heading.style["list-style-type"] = "none";

     for(var row=0; row<Num_Alphabets; row++)
     {
  	   var node = document.createElement("LI");
	   node.title = "englishList";
	   var textNode = document.createElement("a");
	   textNode.appendChild(document.createTextNode(String.fromCharCode(UPPER_CASE_ASCII_START + row)));
	   textNode.href = "#";
	   textNode.title = String.fromCharCode(97 + row) ;
	   textNode.setAttribute("class", "alphabetLink");
	   textNode.id = "alphabetLink";
	   node.appendChild(textNode);
           heading.appendChild(node);
     }
	     
     $(document).on("click", "#alphabetLink", showList);	

     heading.appendChild(createAllLink("English"));
     heading.appendChild(createCategoryLink("English"));
}

function createAllLink(lang)
{
     var li = document.createElement("LI");
     var all = document.createElement("a");
     if(lang.localeCompare("English") == 0)
     { 
	all.appendChild(document.createTextNode("All")); 
     	all.href = "javascript:showAll('English')";
        if(isMobile())
        {
          all.style["padding"] = "0.3em 0.1em 0.2em 0.3em";
          li.style.fontSize = "0.925em";
        }
        else
          all.style["padding"] = "0.976vw";
     }
     else if(lang.localeCompare("Kannada") == 0)
     {
        if(isMobile())
        {
          li.style.fontSize = "0.525em";
          all.style["padding"] = "0";
	}
        else
        {
          li.style.fontSize = "1.25em";
          all.style["padding"] = "0.976vw 0.976vw 0.976vw 0.476vw";
        }
        all.appendChild(document.createTextNode("ಎಲ್ಲ"));
        all.href = "javascript:showAll('Kannada')";
     }

     all.id = "allAlphabetLinks";
     all.setAttribute("class", "allAlphabetLinks");
     all.style["text-decoration"] = "none";
     all.style["display"] = "inline-block";
     li.appendChild(all);
     return li;
}

function createCategoryLink(lang)
{
     var li = document.createElement("LI");
     li.setAttribute("class", "categoryDropdown");
     var categoryLink = document.createElement("a");
     categoryLink.href = "#";
     categoryLink.setAttribute("class", "categoryLink");
     categoryLink.style["text-decoration"] = "none";
     categoryLink.style["display"] = "inline-block";
     if(lang.localeCompare("English") == 0) 
     { 
        if(isMobile())
        {
          categoryLink.style["padding"] = "0.3em 0.1em 0.2em 0.3em";
          li.style.fontSize = "0.925em";
          categoryLink.appendChild(document.createTextNode("Set")); 
        }
        else
        {
          categoryLink.style["padding"] = "0.976vw"; 
          categoryLink.appendChild(document.createTextNode("Category")); 
        }
     }
     else if(lang.localeCompare("Kannada") == 0) 
     { 
        if(isMobile())
        {
          categoryLink.style["padding"] = "0";
          li.style.fontSize = "0.525em";
        }
        else
        {
          categoryLink.style["padding"] = "1.87vh 2.08vw 1.57vh 1.5vw";
          li.style.fontSize = "1.25em";
        }
        categoryLink.appendChild(document.createTextNode("ವರ್ಗ")); 
     }
     li.appendChild(categoryLink);

     var select = document.createElement("select");
     select.setAttribute("class", "categoryDiv");

     var option = document.createElement("option");
     option.value = "none";
     if(lang.localeCompare("English") == 0) 
       option.text = "Select one...";
     else if(lang.localeCompare("Kannada") == 0) {
       option.text = "ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.." ;
       option.style.fontSize = "small";
     }
     select.appendChild(option);

     for (const val of CATEGORIES)
     {
	var option = document.createElement("option");
	option.value = val;
        var inputArray = val.split(" ");
	if(lang.localeCompare("English") == 0) 
        {
           option.text = inputArray[0]; 
        }
	else if(lang.localeCompare("Kannada") == 0) 
	{ 
           var kanText = inputArray[1].replace(/\(|\)/g, ''); 
	   option.text = kanText.trim();	
           option.style.fontSize = "medium";
	}
	select.appendChild(option);
     }
     select.style["display"] = "none";
     select.addEventListener('change', function() { 
	open = !open;
	if(lang.localeCompare("English") == 0) { document.getElementsByClassName("categoryDiv")[0].style.display = "none"; }
	else if(lang.localeCompare("Kannada") == 0) { document.getElementsByClassName("categoryDiv")[1].style.display = "none"; } 
        if(this.value == "none") return;
	showCategoryWords(lang, this.value);
     });

     categoryLink.appendChild(select);
     categoryLink.addEventListener("click", function() 
     {  
	open = !open;
	if(lang.localeCompare("English") == 0) 
        { 
          document.getElementsByClassName("categoryDiv")[0].style.display = "block"; 
        }
	else if(lang.localeCompare("Kannada") == 0) 
        { 
          document.getElementsByClassName("categoryDiv")[1].style.display = "block";
        } 
            var scrollTop = 
            window.pageYOffset || document.documentElement.scrollTop; 
                window.onscroll = function() { 
                    window.scrollTo(0, scrollTop); 
                }; 
    var inter = setInterval( function() {
      clearInterval(inter);
      window.onscroll = function() {}; }, 100); 
     });

     return li;
}

function createKannadaAlphabetLinks()
{
     glossaryKannadaUL = document.createElement("UL");
     glossaryKannadaUL.setAttribute("id", "kannadaAlphabetList");
     glossaryKannadaUL.setAttribute("class", "kannadaAlphabetList");
     glossaryKannadaUL.style["list-style"] = "none";
     document.getElementById("glossaryKannadaAlphabets").appendChild(glossaryKannadaUL);
     var heading = document.getElementById("kannadaAlphabetList") ;
     heading.style["list-style-type"] = "none";
	  	   
     heading.appendChild(createLinkFor('ಅ','a'));
     heading.appendChild(createLinkFor('ಬ','b'));
     heading.appendChild(createLinkFor('ಚ','c'));
     heading.appendChild(createLinkFor('ದ','d'));
     heading.appendChild(createLinkFor('ಎ','e'));
     heading.appendChild(createLinkFor('\u00A0','f'));
     heading.appendChild(createLinkFor('ಗ','g'));
     heading.appendChild(createLinkFor('ಹ','h'));
     heading.appendChild(createLinkFor('ಇ','i'));
     heading.appendChild(createLinkFor('ಜ','j'));
     heading.appendChild(createLinkFor('ಕ','k'));
     heading.appendChild(createLinkFor('ಲ','l'));
     heading.appendChild(createLinkFor('ಮ','m'));
     heading.appendChild(createLinkFor('ನ','n'));
     heading.appendChild(createLinkFor('ಒ','o'));
     heading.appendChild(createLinkFor('ಪ','p'));

     if(isMobile())
       heading.appendChild(createLinkFor('\u00A0\u00A0','q'));
     else
       if(screenWidth > LARGE_SCREEN_WIDTH)
         heading.appendChild(createLinkFor('\u00A0\u00A0\u00A0','q'));
       else
         heading.appendChild(createLinkFor('\u00A0\u00A0','q'));
     heading.appendChild(createLinkFor('ರ','r'));
     heading.appendChild(createLinkFor('ಸ','s'));
     heading.appendChild(createLinkFor('ತ','t'));
     heading.appendChild(createLinkFor('ಉ','u'));
     heading.appendChild(createLinkFor('ವ','v'));
     heading.appendChild(createLinkFor('\u00A0','w'));
     heading.appendChild(createLinkFor('\u00A0\u00A0\u00A0','x'));
     heading.appendChild(createLinkFor('ಯ','y'));

     if(isMobile())
       heading.appendChild(createLinkFor('\u00A0','z'));
     else
       if(screenWidth > LARGE_SCREEN_WIDTH)
         heading.appendChild(createLinkFor('\u00A0\u00A0','z'));
       else
         heading.appendChild(createLinkFor('\u00A0','z'));
     $(document).on("click", "#kannadaAlphabetLink", showList);	

     heading.appendChild(createAllLink("Kannada"));
     heading.appendChild(createCategoryLink("Kannada"));
}

function createLinkFor(kan,eng)
{
     var node = document.createElement("LI");
     node.title = "kannadaList";    
     if(isMobile())
       node.style.fontSize = "0.625em";
     else
       node.style.fontSize = "1.25em";

     var textNode = document.createElement("a");
     textNode.appendChild(document.createTextNode(kan));
     textNode.href = "#";
     textNode.title = eng ;
     textNode.style["text-decoration"] = "none"; 
     textNode.setAttribute("class", "kannadaAlphabetLink");
     textNode.id = "kannadaAlphabetLink";
     node.appendChild(textNode);
     return node;
}

function showList()
{
   var chr = $(this).attr("title"); 
   selectedChr = chr;
   var id = $(this).attr("id"); 
   var alphabet, alphabetKan;

   alphabet = document.getElementsByClassName("alphabetLink");
   alphabetKan = document.getElementsByClassName("kannadaAlphabetLink"); 

   if(id.localeCompare("kannadaAlphabetLink") == 0) { showKannadaWords = 1; alphabet = alphabetKan; changeColor(chr, "Kannada");}
   else { showKannadaWords = 0;    changeColor(chr, "English");} 	   

   showWordLinks(chr);
}

function changeColor(chr, lang)
{
   var alphabet = document.getElementsByClassName("alphabetLink");
   var alphabetKan = document.getElementsByClassName("kannadaAlphabetLink"); 
   for(var a=0; a<Num_Alphabets;a++) {
	alphabet[a].style["background-color"] = "transparent";
        alphabet[a].style["color"] = "blue"; 
        alphabetKan[a].style["background-color"] = "transparent";
        alphabetKan[a].style["color"] = "blue"; 
   }

   var all = document.getElementsByClassName("allAlphabetLinks");
   all[0].style["background-color"] = "transparent";
   all[0].style["color"] = "blue"; 
   all[1].style["background-color"] = "transparent";
   all[1].style["color"] = "blue"; 

   var category = document.getElementsByClassName("categoryLink");
   category[0].style["background-color"] = "#F5EEF8";
   category[0].style["color"] = "blue"; 
   category[1].style["background-color"] = "#F5EEF8";
   category[1].style["color"] = "blue"; 

   var set;
   if(chr.localeCompare('all') == 0) { set = all[0];}
   else if(chr.localeCompare('allk') == 0) { set = all[1];}
   else if(chr.localeCompare('category') == 0) { set = category[0];}
   else if(chr.localeCompare('categoryk') == 0) { set = category[1];}
   else if(lang.localeCompare('Kannada') == 0)  { set = alphabetKan[chr.charCodeAt(0) - 97]; }
   else if(lang.localeCompare('English') == 0)  { set = alphabet[chr.charCodeAt(0) - 97]; }
 
   set.style["background-color"] = COLOR_LIGHT_PINK;
   set.style["color"] = COLOR_CARAMINE_PINK;
}

function showWordLinks(chr)
{
    var eaIndex = chr.charCodeAt(0) - 97;
 
    showPagination(1,eaIndex,encoded_array[eaIndex]);   
    showWords(0,eaIndex,encoded_array[eaIndex],"wordLinks");
}

function createPagination()
{
    glossaryPaginationDiv = document.createElement("DIV");
    glossaryPaginationDiv.setAttribute("class", "pagination");

    for(var p = 1; p<=MAX_PAGINATION; p++) {
        var pagLink = document.createElement("a");
	pagLink.href = "#";
	pagLink.id = "paginationLinks";
	pagLink.setAttribute("class", "paginationLinks");
	pagLink.appendChild(document.createTextNode(p.toString())); 
	pagLink.style["display"] = "none";
	glossaryPaginationDiv.appendChild(pagLink);
    }

    document.getElementById("glossaryPage").innerHTML = "";
    document.getElementById("glossaryPage").appendChild(glossaryPaginationDiv);
    $(document).on("click", "#paginationLinks", paginationClick);
    $("#paginationLinks").mouseenter(function() { $(this).css("background-color", ""); });
    $("#paginationLinks").mouseleave(function() { $(this).css("background-color", "transparent"); });		
}

function showPagination(selectedPage, eaIndex, tempencoded)
{
     document.getElementById("glossaryPage").style["display"] = "block" ;

     var length = tempencoded.length; 

     var numPages = 0;
     if(isMobile())
     {
       numPages = parseInt((length / getNumWords()).toString()) ;
       if(length % getNumWords()) { numPages ++ ; } //console.log(numPages + " ");
     }
     else
     {
       numPages = parseInt((length / NUM_WORDS_PER_PAGE).toString()) ;
       if(length % NUM_WORDS_PER_PAGE) { numPages ++ ; }
     }
     var div = document.getElementById("glossaryPage").getElementsByClassName("pagination");
     var pageLinks = div[0].getElementsByClassName("paginationLinks");
     var dot = div[0].getElementsByClassName("dotdotdot");

     while(dot.length > 0) { dot[0].parentNode.removeChild(dot[0]); }

     for(var p=0; p<MAX_PAGINATION;p++)
     {
	pageLinks[p].style["display"] = "none";
	pageLinks[p].title = "";
        pageLinks[p].style["background-color"] = "transparent";
     }
     var pageIndexToLeft; 
     if(selectedPage <= 5) { pageIndexToLeft = 1; } else { pageIndexToLeft = selectedPage - 4; }
     var pageIndexToRight = pageIndexToLeft + (MAX_PAGINATION_DISPLAY - 1) ; if(pageIndexToRight > numPages) { pageIndexToRight = numPages ; }

     for(var p=pageIndexToLeft; p<=pageIndexToRight;p++)
     {
	pageLinks[p-1].title = p.toString() + " " + eaIndex.toString(); 
	pageLinks[p-1].style["display"] = "block";
     }

     if(pageIndexToLeft != 1) 
     { 
	var text = document.createElement("a");
	text.href = "#";
	text.setAttribute("class", "dotdotdot");
	text.style["cursor"] = "not-allowed";
	text.appendChild(document.createTextNode("...")); 
	div[0].insertBefore(text,pageLinks[pageIndexToLeft-1]);
	pageLinks[0].title = "1" + " " + eaIndex.toString(); 
	pageLinks[0].style["display"] = "block";
     }

     if(((pageIndexToRight-pageIndexToLeft) == MAX_PAGINATION_DISPLAY-1) && (pageIndexToRight != numPages)) 
     { 
	pageLinks[numPages-1].title = numPages.toString() + " " + eaIndex.toString(); 
	pageLinks[numPages-1].style["display"] = "block";
	var text = document.createElement("a");
	text.href = "#";
	text.setAttribute("class", "dotdotdot");
	text.style["cursor"] = "not-allowed";
        text.style["text-decoration"] = "none";
	text.appendChild(document.createTextNode("...")); 
	div[0].insertBefore(text,pageLinks[numPages-1]);
     }	      
	      
     pageLinks[selectedPage-1].style["background-color"] = COLOR_LIGHT_PINK ;
}

function paginationClick()
{
    var input = $(this).attr("title"); 
    var inputArray = input.split(" ");
    var page = inputArray[0];
    var eaIndex = inputArray[1];

    var numWords = isMobile() ? getNumWords() : NUM_WORDS_PER_PAGE;
    var startIndex = (page-1) * numWords;

    var index;
    var arr = [];
    var id = '';

    if(selectedChr == "All")
    {
      arr = all_encoded_array;
      id = "categoryTableWord";
      index = startIndex;
    }
    else if(selectedChr == "Category")
    {
      arr = category_encoded_array;
      id = "categoryTableWord";
      index = startIndex;
    }
    else
    {
      arr = encoded_array[eaIndex];
      id = "wordLinks";
      index = eaIndex;
    }

    showPagination(page,index,arr);
    showWords(startIndex,index,arr,id);
}

function showWords(startIndex,eaIndex,tempencoded,id)
{
    var columnCount = NUM_WORDS_PER_COLUMN;
    if(isMobile())
      columnCount = NUM_WORDS_PER_COLUMN_FOR_MOBILE;

    var newTable = document.createElement("TABLE");
    newTable.id = "glossaryWordListTable";
    newTable.width = '100%' ;
    newTable.border='0';
    newTable.style["border-collapse"] = "collapse";
    newTable.cellpadding = "0";
    newTable.cellspacing = "0";
    newTable.rules = "ROWS";
    if(isMobile())
     newTable.style.marginLeft = "10em";
    
    var tableBody = document.createElement('TBODY');
    newTable.appendChild(tableBody);

    var tr = [];
    var numWords = NUM_WORDS_PER_PAGE;
    if(isMobile())
      numWords = getNumWords();
    if((tempencoded.length - startIndex) < numWords) { numWords = tempencoded.length - startIndex; }

    for(var row=startIndex,count=0; row<numWords+startIndex; row++,count++) {
      
     if(count < columnCount) {
	tr[count] = document.createElement('TR');
        tr[count].style.borderColor = "#dcdcdc";
        tableBody.appendChild(tr[count]);
     }

     var td = document.createElement('TD');
     td.style.borderColor = "#dcdcdc";
     td.width ='1000 px';
     td.height = '50 px';
     td.style.fontSize = "20 px"; 
     var textNode = document.createElement("a"); 
     if(showKannadaWords == 1) 
     { 
	var column;
	    if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT) { column = BS_WORD_COLUMN_KANNADA_FONT; }
	    else if(languageColumn == KS_WORD_COLUMN_ENGLISH_FONT) { column = KS_WORD_COLUMN_KANNADA_FONT; }
	    else if(languageColumn == LS_WORD_COLUMN_ENGLISH_FONT) { column = LS_WORD_COLUMN_KANNADA_FONT; }
	    else { column = MS_WORD_COLUMN_KANNADA_FONT; }
	textNode.appendChild(document.createTextNode(tempencoded[row][column])); 
        if(isMobile())
          td.style.fontSize = 'large' ; 
        else
          td.style.fontSize = 'x-large' ; 
     }
     else
     { 
	var column;
	    if(languageColumn == BS_WORD_COLUMN_ENGLISH_FONT) { column = BS_WORD_COLUMN_ENGLISH_FONT; }
	    else if(languageColumn == KS_WORD_COLUMN_ENGLISH_FONT) { column = KS_WORD_COLUMN_ENGLISH_FONT; }
	    else if(languageColumn == LS_WORD_COLUMN_ENGLISH_FONT) { column = LS_WORD_COLUMN_ENGLISH_FONT; }
	    else { column = MS_WORD_COLUMN_ENGLISH_FONT; }
        textNode.appendChild(document.createTextNode(tempencoded[row][column])); 
     }
     
     textNode.title = row.toString() + " " + eaIndex.toString(); 
     textNode.id = id;
     textNode.href = "#";
     textNode.style["rel"] = "stylesheet";
     textNode.style["text-decoration"] = "none";
     textNode.style["color"] = "#909497" ;
     td.appendChild(textNode);
     tr[row % columnCount].appendChild(td);
   }

   var area = document.getElementById("glossaryWordList");
   if(isMobile())
     if(showKannadaWords == 1) 
     {
       area.style.width = "30em";
       document.getElementById("glossaryPage").style.width = "30em";
     }

   area.innerHTML = ""; 
   area.appendChild(newTable);
   var newLine = document.createElement("BR");
   area.appendChild(newLine); area.appendChild(newLine); area.appendChild(newLine); 

   $(document).on("click", "#wordLinks", showWordData);

   if(selectedChr != "Category")
   {   
     document.getElementById("categoryDownloadLink").style.display = 'none';
     document.getElementById("categoryStatisticsPopup").style.display = 'none';
   }
}

function getNumWords()
{
  return Math.floor(screenWidth/100) * 20;
}

function showWordData()
{
    var input = $(this).attr("title");
    var inputArray = input.split(" ");
    c = inputArray[0];
    var eaIndex = inputArray[1];
    var top = 0;

    encoded = encoded_array[eaIndex];

    var word = document.getElementById("glossaryWordList") ;

    var prevDataTable = document.getElementById("glossaryWordData");
    if(prevDataTable != null) { prevDataTable.remove(); }
    var prevExampleTable = document.getElementById("glossaryWordExample");
    if(prevExampleTable != null) { prevExampleTable.remove(); }
    var newLine = document.createElement("BR");
    word.appendChild(newLine); word.appendChild(newLine); 
    word.appendChild(generateDataTable("glossaryWordData", top));
    word.appendChild(newLine); word.appendChild(newLine); word.appendChild(newLine);
    word.appendChild(generateExampleTable("glossaryWordExample", top));   
    document.getElementById("glossaryWordData")
    ;(function() {
       var pageHeight = 0;

       function findHighestNode(nodesList) {
          for (var i = nodesList.length - 1; i >= 0; i--) {
            if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
                var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
                pageHeight = Math.max(elHeight, pageHeight);
            }
            if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
          }
       }

       pageHeight = document.getElementById("glossaryWordListTable").offsetHeight; //console.log(pageHeight);

var el = document.getElementById("glossaryWordData"); //console.log(isInViewport(el));
if(isInViewport(el))
{
    var scrollTop = 
    window.pageYOffset || document.documentElement.scrollTop; 
    var scrollLeft = 
    window.pageXOffset || document.documentElement.scrollLeft; 

    window.onscroll = function() { 
      window.scrollTo(scrollLeft, scrollTop); 
    }; 
    var inter = setInterval( function() {
    clearInterval(inter);
    window.onscroll = function() {}; }, 100); 
}
else
{
  window.scrollTo(0,pageHeight); 
  window.onscroll = function() { 
    window.scrollTo(0, pageHeight); 
  }; 
  var inter = setInterval( function() {
   clearInterval(inter);
   window.onscroll = function() {}; }, 100); 
}
})();   
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function scrollToElement(pageElement) {    
    var positionX = 0,         
        positionY = 0;    

    while(pageElement != null){        
        positionX += pageElement.offsetLeft;        
        positionY += pageElement.offsetTop;        
        pageElement = pageElement.offsetParent;        
        window.scrollTo(positionX, positionY);    
    }
}

function showAll(lang)
{
   selectedChr = "All"; 
   showMe(lang,"all", "");
   document.getElementById("categoryDownloadLink").style.display = 'none';
   document.getElementById("categoryStatisticsPopup").style.display = 'none';
}

function showMe(lang, link, category)
{
   document.getElementById("glossaryPage").style["display"] = "none" ;
   if(link.localeCompare("category") == 0)
   {
   	category = category.split(" "); 
	category = category[0];
   }
   
   var linkChange = link;
   if(lang.localeCompare("Kannada") == 0) { linkChange = link + "k"; }
   changeColor(linkChange, ""); 

   var col = 0, tr;
   var categoryTable = document.createElement("TABLE");
   categoryTable.id = "glossaryWordListTable";
   categoryTable.width = '100%' ;
   categoryTable.border='0';
   categoryTable.style["border-collapse"] = "collapse";
   categoryTable.cellpadding = "0";
   categoryTable.cellspacing = "0";  
   categoryTable.rules = "ROWS";
   if(isMobile())
     categoryTable.style.marginLeft = "10em";

   var tableBody = document.createElement('TBODY');
   categoryTable.appendChild(tableBody);

   var numColumns = 3;
   if(lang.localeCompare("Kannada") == 0) showKannadaWords = 1;   
   else showKannadaWords = 0;

   if(link.localeCompare("category") == 0) 
   {
        category_encoded_array = [];
        var j=0;
        for(var c = 0;c<Num_Alphabets;c++)
        {
          var temp = encoded_array[c];
          for(var row=0; row<temp.length; row++)
          {
 	     if(!(category.localeCompare(temp[row][SANKETI_WORD_CATEGORY]) == 0)) { continue; }
             else category_encoded_array[j++] = temp[row];
          }
        }
       col = j;
       showPagination(1,0,category_encoded_array);    
       showWords(0,0,category_encoded_array,"categoryTableWord");
   }
   else
   {
       populateAllEncodedArray();
       showPagination(1,0,all_encoded_array); 
       showWords(0,0,all_encoded_array,"categoryTableWord");
   }

   $(document).on("click", "#categoryTableWord", showWordData);
   numCategoryWords = col;
}

function populateAllEncodedArray()
{
     if(!all_encoded_array || !all_encoded_array.length)    
       for(var c=0,j=0;c<Num_Alphabets;c++)
       {
         var temp = encoded_array[c];
         for(var i=0;i<temp.length;i++)
         {
           all_encoded_array[j++] = temp[i];
         }
       }
}

function showCategoryWords(lang, category)
{
   selectedChr = "Category";
   selectedLang = lang; 
   showMe(lang,"category",category);
   document.getElementById("categoryDownloadLink").style.display = 'block';
   document.getElementById("categoryStatisticsPopup").style.display = 'block';
}

function showEssayList()
{   
   if(!firstTimeInEssay) { return; }
   firstTimeInEssay = false;
   var coll = document.getElementsByClassName("collapsible");
   for (var i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
       this.classList.toggle("collapsibleActive");
       var content = this.nextElementSibling;
       if (content.style.maxHeight){
         content.style.maxHeight = null;
       } else {
         content.style.maxHeight = content.scrollHeight + "px";
       } 
     });
   }
}

function showEssay(index, lang)
{
   var text;
   var p = document.createElement("p");
   p.style["font-weight"] = 'normal' ; 
   p.style.textDecoration = "none";
   p.style["text-align"] = "left";
   if(!isMobile())
     p.style["width"] = "90%";

   if((lang === "English") || (lang === "Sanketi_English"))
   {
       p.style["font-family"] = "Arial";
       p.style["font-size"] = 'large' ; 
   }
   else if((lang === "Kannada") || (lang === "Sanketi_Kannada"))
   {
       p.style["font-family"] = "Nudi Akshara-07";
       p.style["font-size"] = 'x-large' ; 
   }
   
   switch(index)
   {
     case 0 : 
	if(lang === "Sanketi_English") 
        { 
           text = ESSAY_LIST_MAKARA_SANKRANTI_SANKETI_IN_ENGLISH_FONT;
        }
	else if(lang === "Sanketi_Kannada") 
        { 
           text = ESSAY_LIST_MAKARA_SANKRANTI_SANKETI_IN_KANNADA_FONT;
        }
	else if(lang === "Kannada") 
        { 
           text = ESSAY_LIST_MAKARA_SANKRANTI_KANNADA;
        }
	else if(lang === "English") 
        { 
           text = ESSAY_LIST_MAKARA_SANKRANTI_ENGLISH;
        }
        break;
   }

   text = text.split("\n"); 
   for(var l=0;l<text.length;l++) 
   {
      var displayText = text[l].replace(/\\n/g, ''); 
      p.appendChild(document.createTextNode(displayText)); 
      p.appendChild(document.createElement("BR"));
      p.appendChild(document.createElement("BR"));
   }

   return p;
}

function showEssayHeaderInEnglish(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'large' ; 
   p.style["font-weight"] = 'bold' ; 
   p.style.textDecoration = "underline";
   p.style["text-align"] = "center";
   p.style["font-family"] = "Arial";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayHeaderInKannada(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'x-large' ; 
   p.style["font-weight"] = 'bold' ; 
   p.style["text-align"] = "center";
   p.style["font-family"] = "Nudi Akshara-07";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayFooterInEnglish(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'large' ; 
   p.style["text-align"] = "left";
   p.style["font-family"] = "Arial";
   p.style["font-style"] = "italic";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayFooterInKannada(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'x-large' ; 
   p.style["text-align"] = "left";
   p.style["font-family"] = "Nudi Akshara-07";
   p.style["font-style"] = "italic";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayDateInEnglish(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'small' ; 
   p.style["text-align"] = "right";
   p.style["font-family"] = "Arial";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayDateInKannada(name)
{
   var p = document.createElement("p");
   p.style["font-size"] = 'large' ; 
   p.style["text-align"] = "right";
   p.style["font-family"] = "Nudi Akshara-07";
   p.appendChild(document.createTextNode(name));
   return p;
}

function showEssayTitle(title)
{
   var div = document.createElement("DIV");
   div.setAttribute("class", "essayTitle");
   if(isMobile())
     div.style.width = "20em";
   if(isMobile280())
     div.style.fontSize = "14px";
   var p = document.createElement("p");
   p.style["font-weight"] = 'bold' ; 
   p.style.textDecoration = "underline";
   p.style["background"] = "#D6EAF8";
   p.appendChild(document.createTextNode(title));
   div.appendChild(p);
   return div;
}

function removeAllChildNodes(parent)
{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addEssayButton(title)
{
   var parent_div = document.createElement("DIV");
   parent_div.setAttribute("class", "essayButtonDiv");
   var p1_div = document.createElement("DIV");
   p1_div.setAttribute("class", "essayButtonEnglish");
   var p1 = document.createElement("p");
   p1.setAttribute("id", "essayButtonTitle");
   p1.appendChild(document.createTextNode("Audio"));
   var p1_kan = document.createElement("span");
   p1_kan.style["font-weight"] = "bold";
   p1_kan.appendChild(document.createTextNode(" (ಆಡಿಯೊ)"));
   p1.appendChild(p1_kan);
   p1_div.appendChild(p1);

   var p3_div = document.createElement("DIV");
   p3_div.setAttribute("class", "essayButtonImage");
   var image = document.createElement("IMG");
   image.src = SERVER_DATA_IMAGES + SERVER_IMAGE_SPEAKER;
   image.setAttribute("width", "20 px");
   p3_div.appendChild(document.createTextNode('\u00A0'));
   p3_div.appendChild(image);
   parent_div.appendChild(p1_div);
   parent_div.appendChild(p3_div);
   var button = document.createElement("button");
   button.setAttribute("class", "essayButton");
   button.appendChild(parent_div);
   button.style.width = "30 px";
   button.style.height = "30px";
   button.title = SERVER_DATA_AUDIO_ESSAY + title + ".aac";
   button.setAttribute("onclick", "playEssayAudio(event,this)");
   return button;
}

function showAllEssays(index)
{
   var right = document.getElementById("Essay_right_panel");

   if(right.children.length > 1) { return; }

   right.appendChild(showEssayHeaderInEnglish(ESSAY_LIST[index][0]));	
   right.appendChild(showEssayHeaderInKannada(ESSAY_LIST[index][1]));	

   right.appendChild(showEssayTitle(TITLE_SANKETI_IN_ENGLISH_FONT));
   right.appendChild(showEssay(index, "Sanketi_English"));

   right.appendChild(showEssayTitle(TITLE_SANKETI_IN_KANNADA_FONT));
   right.appendChild(showEssay(index, "Sanketi_Kannada"));

   right.appendChild(addEssayButton(ESSAY_LIST[index][0]));
   right.appendChild(document.createElement("BR"));
   right.appendChild(document.createElement("BR"));
   right.appendChild(document.createElement("BR"));

   right.appendChild(showEssayTitle(TITLE_ENGLISH));
   right.appendChild(showEssay(index, "English"));

   right.appendChild(showEssayTitle(TITLE_KANNADA));
   right.appendChild(showEssay(index, "Kannada"));

   var author_div = document.createElement("DIV");
   author_div.setAttribute("class", "essayAuthor");
   author_div.appendChild(showEssayFooterInEnglish(ESSAY_LIST[index][2]));	
   author_div.appendChild(showEssayFooterInKannada(ESSAY_LIST[index][3]));

   var date_div = document.createElement("DIV");
   date_div.setAttribute("class", "essayDate");
   date_div.appendChild(showEssayDateInEnglish(ESSAY_LIST[index][4]));	
   date_div.appendChild(showEssayDateInKannada(ESSAY_LIST[index][5]));

   var parent_div = document.createElement("DIV");
   parent_div.setAttribute("class", "essayFooter");
   parent_div.appendChild(author_div);
   parent_div.appendChild(date_div);
   right.appendChild(parent_div); 
}

var selectedLanguage = document.getElementById("Lang");

if(selectedLanguage) {
  selectedLanguage.onchange = function(){
  var elem = null;
  elem = document.getElementById('dictionaryTable');
  if(elem)
    elem.innerHTML = '';
  elem = null;
  elem = document.getElementById('text');
  if(elem)
   elem.value = '';

   if(this.selectedIndex == 0) { languageColumn = BS_WORD_COLUMN_ENGLISH_FONT; } 
   else if (this.selectedIndex == 1) { languageColumn = KS_WORD_COLUMN_ENGLISH_FONT; }  
   else if (this.selectedIndex == 2) { languageColumn = LS_WORD_COLUMN_ENGLISH_FONT; }  
   else if (this.selectedIndex == 3) { languageColumn = MS_WORD_COLUMN_ENGLISH_FONT; }  
   else if (this.selectedIndex == 4) { languageColumn = KANNADA_WORD_COLUMN_ENGLISH_FONT; }  
   else if (this.selectedIndex == 5) { languageColumn = ENGLISH_WORD_COLUMN; }  
   sortDictionaryArray();
   getSearchColumn();
   };
}

const source = document.getElementById('text'); 
if(source) {
source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); 
source.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("Search").click();
  }
});
}

var modal = document.getElementById("dictionaryDownloadPopup");
var btn = document.getElementById("dictionaryDownloadButton");
var span = document.getElementsByClassName("dictionaryPopupClose")[0];
if(btn) {
btn.onclick = function() {  
  for(var k=0;k<Num_Alphabets;k++)
    if(dictionaryDownloadPopupAlphabet[k] == 1)
       break;

  if(k < Num_Alphabets)
  {
    document.getElementById("popupWarningAlert").style.display = "block";
    freezeMainWindow();
    document.getElementById('popupWarningAlert').style.pointerEvents = "auto";
  }
  else
    handleDownloadOk();
}
}

function restoreFromPopupAlert()
{
   document.getElementById("popupWarningAlert").style.display = "none";
   unfreezeMainWindow();
}

function freezeMainWindow()
{
  document.body.style.pointerEvents = "none";
  document.getElementById("tab").style.pointerEvents = "none";
}

function unfreezeMainWindow()
{
  document.body.style.pointerEvents = "auto";
  document.getElementById("tab").style.pointerEvents = "auto";
}

function handleDownloadOk()
{
  restoreFromPopupAlert();
  hitCount = 0;
  modal.style.display = "block";
  for(var k=0;k<Num_Alphabets;k++)
    dictionaryDownloadPopupAlphabet[k] = 0;
  var checkbox = document.getElementsByClassName("dictionaryDownloadPopupCheckbox"); 
  for(var c=0;c<checkbox.length;c++)
     checkbox[c].checked = false;
  freezeMainWindow();
  modal.style.pointerEvents = "auto";
}

if(span) {
span.onclick = function() {
  modal.style.display = "none";
  unfreezeMainWindow();
}
}

function setDictionaryDownloadPopupAlphabet(value)
{
     for(var k=0;k<Num_Alphabets;k++)
       dictionaryDownloadPopupAlphabet[k] = value;
     dictionaryDownloadPopupAlphabet[5] = 0; //f
     dictionaryDownloadPopupAlphabet[16] = 0; //q
     dictionaryDownloadPopupAlphabet[22] = 0; //w
     dictionaryDownloadPopupAlphabet[23] = 0; //x
     dictionaryDownloadPopupAlphabet[25] = 0; //z
}

function dictionaryDownloadPopupCheckBoxClick(id,index)
{
   var checkBox = document.getElementById(id);
   var value = 0;

   if(checkBox.checked == true) 
     value = 1;  

    if(index==26) {
     setDictionaryDownloadPopupAlphabet(value);
    }
    else
     dictionaryDownloadPopupAlphabet[index] = value;
}

function showSampleSentencesStatistics()
{
  var popup = document.getElementById("sampleSentencesStatisticsPopupTextID");
  if(isMobile())
    popup.innerHTML = "Count(ಲೆಕ್ಕ) : " + currentSampleSentencesPageArray.length + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: 10px;'>" + currentSampleSentencesPageArray.length + ")";
  else
    popup.innerHTML = "Count(ಲೆಕ್ಕ) : " + currentSampleSentencesPageArray.length + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: 20px;'>" + currentSampleSentencesPageArray.length + ")";
  popup.classList.toggle("show");
}

function dictionaryStatistics()
{
  var popup = document.getElementById("dictionaryStatisticsPopupTextID");
  if(totalNumDictionaryWords == 0)
    for(var index=0; index<Num_Alphabets; index++)
      totalNumDictionaryWords += encoded_array[index].length; 
  popup.style["color"] = '#F1C40F';

  if(isMobile())
    popup.innerHTML = "Total(<b>ಒಟ್ಟು</b>) : " + "&nbsp" + totalNumDictionaryWords + "<span style = 'font-family: Nudi Akshara-07;font-size: 0.825em;'>" + " (" + totalNumDictionaryWords + ")";
  else
    popup.innerHTML = "Total(<b>ಒಟ್ಟು</b>) : " + "&nbsp" + totalNumDictionaryWords + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: small;'>" + totalNumDictionaryWords + ")";
  popup.appendChild(document.createElement("br"));
  var detailsLink = document.createElement("a");
  detailsLink.href = "javascript:showDictionaryStatisticsDetails()";
  detailsLink.style["text-decoration"] = "none";
  detailsLink.style["color"] = "#DC7633" ;
  detailsLink.appendChild(document.createTextNode("Details (ವಿವರಗಳು)"));
  popup.appendChild(detailsLink);
  popup.classList.toggle("show");
}

function showDictionaryStatisticsDetails()
{
  var popup = document.getElementById("dictionaryStatisticsPopupTextID");
  popup.classList.toggle("show");
  popup.style["color"] = '#DC7633';

  if(isMobile())
    popup.innerHTML = "Total(<b>ಒಟ್ಟು</b>) : " + "&nbsp" + totalNumDictionaryWords + "<span style = 'font-family: Nudi Akshara-07;font-size: 0.825em;'>" + " (" + totalNumDictionaryWords + ")";
  else
    popup.innerHTML = "Total(<b>ಒಟ್ಟು</b>) : " + "&nbsp" + totalNumDictionaryWords + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: small;'>" + totalNumDictionaryWords + ")";
  popup.appendChild(document.createElement("br"));
  for(var index=0; index<Num_Alphabets; index++)
  {
     if(encoded_array[index].length > 1)
     {
       popup.innerHTML += String.fromCharCode(97 + index) + " (";
       switch(index)
       {
         case 0: popup.innerHTML += "ಅ ಆ ಅಂ  ಅಃ" ; break;
	 case 1: popup.innerHTML += "ಬ ಭ" ; break;
	 case 2: popup.innerHTML += "ಚ ಛ" ; break;
	 case 3: popup.innerHTML += "ದ ಧ ಡ ಢ" ; break;
	 case 4: popup.innerHTML += "ಈ ಎ ಏ" ; break;
	 case 6: popup.innerHTML += "ಗ ಘ" ; break;
	 case 7: popup.innerHTML += "ಹ" ; break;
	 case 8: popup.innerHTML += "ಇ ಐ" ; break;
	 case 9: popup.innerHTML += "ಜ ಝ" ; break;
	 case 10: popup.innerHTML += "ಕ ಖ" ; break;
	 case 11: popup.innerHTML += "ಲ ಳ" ; break;
	 case 12: popup.innerHTML += "ಮ" ; break;
	 case 13: popup.innerHTML += "ನ ಣ" ; break;
	 case 14: popup.innerHTML += "ಒ ಓ ಔ" ; break;
	 case 15: popup.innerHTML += "ಪ ಫ" ; break;
	 case 17: popup.innerHTML += "ರ ಋ" ; break;
	 case 18: popup.innerHTML += "ಸ ಶ ಷ" ; break;
	 case 19: popup.innerHTML += "ಟ ಠ ತ ಥ" ; break;
	 case 20: popup.innerHTML += "ಉ ಊ" ; break;
	 case 21: popup.innerHTML += "ವ" ; break;
	 case 24: popup.innerHTML += "ಯ" ; break;
       }
       popup.innerHTML += ")" + " : " ;
       popup.innerHTML += encoded_array[index].length;
       if(isMobile())
         popup.innerHTML += "<span style = 'font-family: Nudi Akshara-07;font-size: 0.825em;'>" + " (" + encoded_array[index].length + ")";
       else
         popup.innerHTML += " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: small;'>" + encoded_array[index].length + ")";
       popup.appendChild(document.createElement("br"));
     }
  }
}

function showCategoryStatistics()
{
  var popup = document.getElementById("categoryStatisticsPopupTextID");
  if(isMobile())
    popup.innerHTML = "Count(ಲೆಕ್ಕ) : " + numCategoryWords + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: 10px;'>" + numCategoryWords + ")";
  else
    popup.innerHTML = "Count(ಲೆಕ್ಕ) : " + numCategoryWords + " (" + "<span style = 'font-family: Nudi Akshara-07;font-size: 20px;'>" + numCategoryWords + ")";
  popup.classList.toggle("show");
}

function DictionaryMainMenuClick()
{
   var id = document.getElementById("LearnMenu-content");
   id.style.display = 'none';
}

function LearnMainMenuClick()
{
   var id = document.getElementById("LearnMenu-content");
   id.style.display = 'none';

   var checkBox = document.getElementById("LearnMainMenu");
   var arrowBtn = document.getElementById("LearnBtnArrow");

  if (checkBox.checked == true){
    arrowBtn.style.display = "block";
  } else {
    arrowBtn.style.display = "none";
  }
}

function showLearnMenu()
{
    var id = document.getElementById("LearnMenu-content");
    var LearnBtn = document.getElementById("Learnbtn"); 

    if(id.style.display=='none')
    {
      unloadAll();
      id.style.display = 'flex';
      id.style.top = (LearnBtn.offsetTop + (isMobile()?53:60)).toString() + "px";
      id.style.left = (LearnBtn.offsetLeft + (isMobile280()?150:160)).toString() + "px";
    }
    else
      id.style.display = 'none';
}

function openVariationsPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("VariationTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("VariationsPage");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#F9FBE7";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "#DCEDC8";
}

function sortTable(table, n, startRow) {
if(startRow === undefined)
  startRow = '1';
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(table);
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = startRow; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function downloadBooks()
{
  var id = document.getElementById("dropdown-content"); 
  id.style.display = "none";
  unloadAll();
  clearScreen();
  document.getElementById("MainDownloadBooks").style["display"] = "block";
}

function downloadClicked()
{
   var id = document.getElementById("dropdown-content"); 
   toggleDisplay(id);
}

function createProjectArchive()
{
  var id = document.getElementById("dropdown-content"); 
  id.style.display = "none";
  unloadAll();
  clearScreen();

  let text = "This will download all the data and audio files of the project and will need around 260MB of disk space. It will take around 13 minutes to complete!\n\n";
  text += "(ಇದು ಈ ಪ್ರಾಜೆಕ್ಟ್ ಗೆ ಸಂಬಂಧಪಟ್ಟ ಎಲ್ಲಾ ಡೇಟ ಮತ್ತು ಆಡಿಯೊ ಫೈ಼ಲ್ಗಳನ್ನು ಇಳಿಸುವುದು ಮತ್ತು ಇದಕ್ಕೆ ಸರಿಸುಮಾರು ೨೬೦ ಎಮ್.ಬಿ ಡಿಸ್ಕ್ ಜಾಗ ಬೇಕಾಗುತ್ತದೆ. ಇದು ಮುಗಿಯಲು ಸುಮಾರು ೧೩ ನಿಮಿಷ ಬೇಕಾಗುತ್ತದೆ!)\n\n";
  text += "Press OK to continue or Cancel\n(ಮುಂದುವರಿಯಲು ಓಕೆ ಒತ್ತಿ ಅಥವಾ ಕಾನ್ಸಲ್ ಮಾಡಿ)\n\n";
  text += "Note (ಸೂಚನೆ) :\n"; 
  text += "Open the saved file/s in the Downloads folder and change the font of all columns where text is illegible to 'Nudi Akshara-07'\n\n";
  text += "(ಡೌನ್ಲೋಡ್ಸ್ ಫೋ಼ಲ್ಡರ್ ನಲ್ಲಿ ಉಳಿಸಿರುವ ಫೈಲ್ಗಳನ್ನು ತೆಗೆದು, ಯಾವ ಕಾಲಮ್ ನಲ್ಲಿ ಅಕ್ಷರಗಳು ಅಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತದೆಯೊ, ಅವುಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಫಾ಼ಂಟನ್ನು 'ನುಡಿ ಅಕ್ಷರ-07' ಗೆ ಬದಲಾಯಿಸಿ)";

  if (confirm(text) == true) {
    document.getElementById("MainDownloadProject").style["display"] = "block"; 
    freezeMainWindow();
    createEntireProjectArchive();
  } else {
     return;
  }
}

function whichBrowser() {
if (isFirefox()) {
return "Firefox";
} else if (isEdge()) {
return "Edge";
} else if (isIE()) {
return "Internet Explorer";
} else if (isOpera()) {
return "Opera";
} else if (isVivaldi()) {
return "Vivalid";
} else if (isChrome()) {
return "Chrome";
} else if (isSafari()) {
return "Safari";
} else {
return "Unknown";
}
}

function agentHas(keyword) {
return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

function isIE() {
return !!document.documentMode;
}

function isSafari() {
return (!!window.ApplePaySetupFeature || !!window.safari) && agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");
}

function isChrome() {
return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
}

function isFirefox() {
return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function isEdge() {
return agentHas("Edg");
}

function isOpera() {
return agentHas("OPR");
}

function isVivaldi() {
return agentHas("Vivaldi");
}

