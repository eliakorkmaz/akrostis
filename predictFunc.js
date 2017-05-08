var fs = require('fs');
var fnc = require('./others');

module.exports = {
	predictSentence : function(sentence){
		var value = "";
		switch(sentence){
			case 'A':
			case 'a':
				value = fnc.getArrayA();
				break;
			case 'B':
			case 'b':
				value = fnc.getArrayB();
				break;
			case 'C':
			case 'c':
				value = fnc.getArrayC();
				break;
			case 'Ç':
			case 'ç':
				value = func.getArrayCc();
				break;
			case 'D':
			case 'd':
				value = fnc.getArrayD();
				break;
			case 'E':
			case 'e':
				value = fnc.getArrayE();
				break;
			case 'F':
			case 'f':
				value = fnc.getArrayF();
				break;
			case 'G':
			case 'g':
				value = fnc.getArrayG();
				break;
			case 'H':
			case 'h':
				value = fnc.getArrayH();
				break;
			case 'I':
			case 'ı':
				value = fnc.getArrayI();
				break;
			case 'İ':
			case 'i':
				value = fnc.getArrayIi();
				break;
			case 'J':
			case 'j':
				value = fnc.getArrayJ();
				break;
			case 'K':
			case 'k':
				value = fnc.getArrayK();
				break;
			case 'L':
			case 'l':
				value = fnc.getArrayL();
				break;
			case 'M':
			case 'm':
				value = fnc.getArrayM();
				break;
			case 'N':
			case 'n':
				value = fnc.getArrayN();
				break;
			case 'O':
			case 'o':
				value = fnc.getArrayO();
				break;
			case 'Ö':
			case 'ö':
				value = fnc.getArrayOo();
				break;
			case 'P':
			case 'p':
				value = fnc.getArrayP();
				break;
			case 'R':
			case 'r':
				value = fnc.getArrayR();
				break;
			case 'S':
			case 's':
				value = fnc.getArrayS();
				break;
			case 'Ş':
			case 'ş':
				value = fnc.getArraySs();
				break;
			case 'T':
			case 't':
				value = fnc.getArrayT();
				break;
			case 'U':
			case 'u':
				value = fnc.getArrayU();
				break;
			case 'Ü':
			case 'ü':
				value = fnc.getArrayUu();
				break;
			case 'V':
			case 'v':
				value = fnc.getArrayV();
				break;
			case 'Y':
			case 'y':
				value = fnc.getArrayY();
				break;
			case 'Z':
			case 'z':
				value = fnc.getArrayZ();
				break;
			default:
				value = " ";
				break;
		}
		return value;
	}
}
