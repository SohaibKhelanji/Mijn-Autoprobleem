var Question;
var Questions = {
	// vraag nummer : [vraag, vraag nummer wanneer ja wordt geantwoord, vraag nummer wanneer nee wordt geantwoord],
	0 : ['Heeft u een elektrische auto?', 101, 1],
	1 : ['Lukt het om uw auto te starten?', 2, 4],
	2 : ['Hoort u vreemde geluiden?', 6, 3],
    3 : ['Ziet u een vloeistofplas onder de auto?', 9, 103],
    4 : ['Geeft uw brandstofmeter aan dat er voldoende brandstof in uw auto zit?', 5, 102 ],
    5 : ['Klinkt het starten(startmotor) van uw auto anders/zachter dan normaal?', 104, 103],
    6 : ['Hoort u een knetterend geluid? Of maakt uw auto/uitlaat meer geluid dan normaal en wordt dit meer wanneer je gas geeft?', 105, 7 ],
    7 : ['Hoort u snerpend piepend geluid bij een draaiende motor? En wordt het erger of soms minder als u extra gas geeft?', 106, 8 ],
	8 : ['Hoort u een zoemend geluid dat mogelijk van de wieln afkomstig is? Of is er bij een van de wielen een roffeltje te horen?', 107, 103],
	9 : ['Ziet u een plasje donkere of zwart vloeistof onder je auto liggen?', 108, 10],
	10 : ['Ligt er een plas groen, rood of geelachtig water onder de auto die mogelijk wat zoetig ruikt?', 109, 11],
	11 : ['Ligt er een plasje water onder je auto na een lange rit waarbij de airco veelvuldig is gebruikt?', 110, 103],
	

    101 : ['Helaas ondersteund onze diagnose tool nog geen elektrische autos'],
    102 : ['Tank uw auto met de juiste brandstof.'],
	103 : ['We kunnen met deze tool de oorzaak van uw problemen niet achterhalen. Neem contact op met een autogarage.'],
	104 : ['De kans is groot dat uw accu leeg is. Probeer de auto te starten met start kabels.'],
	105 : ['Het is mogelijk dat de uitlaat lek is of kapot is. je kunt een bekeuring krijgen vanwegen lawaai-overlast. Neem direct contact op met een autogarage.'],
	106 : ['Er is een grote kans dat de V-snaar die de dynamo aandrijft, versleten is of niet goed gespannen staat. Neem direct contact op met een autogarage.'],
	107 : ['De kans is groot dat de wiellagers zijn verseleten. Neem direct contact op met een autogarage.'],
	108 : ['Het is mogelijk dat er motorolie is weggelekt. Begin met peilen of er nog voldoende motorolie in de motor zit. Als je net een rit hebt gemaakt, wacht dan minstens vijf minuten tot de motor is afgekoeld. Zit er nog wel voldoende olie in, rijd dan direct naar een garage.'],
	109 : ['De kans is groot dat dit koelvloeistof is. Er is waarschijnlijk sprake van een lekkage in het koelsysteem. Neem geen risico en bel direct een garage.'],
	110 : ['Het is waarschijnlijk condenswater van de auto. Dan is er geen probleem. Het is normaal dat een airco na langdurig werken even stoom afblaast in de vorm van condenswater. Twijfel je toch of het koelvloeistof is? Neem dan contact op met een garage.']
};

function nextQuestion(number){ //number: 0 = First run, 1 = Ja, 2 = Nee 
	if(number == 0){
		Question = 0;
		document.getElementById("vraag_ja").style.display = "inline"; 
		document.getElementById("vraag_nee").style.display = "inline"; 
		document.getElementById("vraag_opnieuw").style.display = "none"; 
		document.getElementById("vraag_contact").style.display = "none";
	}else{
		Question = Questions[Question][number];
	}
	document.getElementById('vraag').textContent  = Questions[Question][0];
	if(Questions[Question][1] == null || Questions[Question][2] == null){
		document.getElementById("vraag_ja").style.display= "none"; 
		document.getElementById("vraag_nee").style.display= "none";
		document.getElementById("vraag_opnieuw").style.display = "inline"; 
		document.getElementById("vraag_contact").style.display = "inline";
		
	}
}

document.addEventListener('DOMContentLoaded', function() {
   nextQuestion(0);
}, false);