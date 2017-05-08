var fs = require('fs');
var fnc = require('./others');

module.exports = {
	predictSentence : function(sentence){
		var deger = "";
		switch(sentence){
			case 'A':
			case 'a':
				deger = fnc.getArrayA();
				break;
			case 'B':
			case 'b':
				deger = fnc.getArrayB();
				break;
			case 'C':
			case 'c':
				deger = fnc.getArrayC();
				break;
			case 'Ç':
			case 'ç':
				deger = func.getArrayCc();
				break;
			case 'D':
			case 'd':
				deger = fnc.getArrayD();
				break;
			case 'E':
			case 'e':
				deger = fnc.getArrayE();
				break;
			case 'F':
			case 'f':
				deger = fnc.getArrayF();
				break;
			case 'G':
			case 'g':
				deger = fnc.getArrayG();
				break;
			case 'H':
			case 'h':
				deger = fnc.getArrayH();
				break;
			case 'I':
			case 'ı':
				deger = fnc.getArrayI();
				break;
			case 'İ':
			case 'i':
				deger = fnc.getArrayIi();
				break;
			case 'J':
			case 'j':
				deger = fnc.getArrayJ();
				break;
			case 'K':
			case 'k':
				deger = fnc.getArrayK();
				break;
			case 'L':
			case 'l':
				deger = fnc.getArrayL();
				break;
			case 'M':
			case 'm':
				deger = fnc.getArrayM();
				break;
			case 'N':
			case 'n':
				deger = fnc.getArrayN();
				break;
			case 'O':
			case 'o':
				deger = fnc.getArrayO();
				break;
			case 'Ö':
			case 'ö':
				deger = fnc.getArrayOo();
				break;
			case 'P':
			case 'p':
				deger = fnc.getArrayP();
				break;
			case 'R':
			case 'r':
				deger = fnc.getArrayR();
				break;
			case 'S':
			case 's':
				deger = fnc.getArrayS();
				break;
			case 'Ş':
			case 'ş':
				deger = fnc.getArraySs();
				break;
			case 'T':
			case 't':
				deger = fnc.getArrayT();
				break;
			case 'U':
			case 'u':
				deger = fnc.getArrayU();
				break;
			case 'Ü':
			case 'ü':
				deger = fnc.getArrayUu();
				break;
			case 'V':
			case 'v':
				deger = fnc.getArrayV();
				break;
			case 'Y':
			case 'y':
				deger = fnc.getArrayY();
				break;
			case 'Z':
			case 'z':
				deger = fnc.getArrayZ();
				break;
			default:
				deger = " ";
				break;
		}
		return deger;
	}
}