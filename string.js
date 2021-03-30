function toBcode(str) // original function to be class later 
{
var arr=[];
let regex=/(?<=\s*)\S+/;
var operands = getOps(str);
let instruction = str.match(regex);

//match instruction
switch(instruction[0].toUpperCase())
{
  case "MOV":

    // Register/Memory to/from Register
    if (/R|M/.test(operands[2])  && /R|M/.test(operands[3])) {

        let opcode = 0b100010;
            w = getW(operands);
            mode = getMod(operands);
            result = 0;
            

        // register to memory
        if (/M/.test(operands[2]) && /R/.test(operands[3])) {

            arr.push(encodeMov(opcode, 0, w));
            result = (mode << 6) + (regToId(operands[1]) << 3) +  regMem(operands);

            arr.push(result);

        }
        // memory to register 
        else if (/R/.test(operands[2])) {

            arr.push(encodeMov(opcode, 1, w ));

            result = (mode << 6) + (regToId(operands[0]) << 3) +  regMem(operands);
            arr.push(result);

        }            
     // Immediate to Register/Memory
    } else if(/M|R/.test(operands[2])  && /I/.test(operands[3])) 
    {
        w=getW(operands);
        arr.push(encodeMov(opcode, 1, w));
        arr.push((mode<<6)+regMem(operands));
        if(w===1){
            let byte=splitNum(operands[1]);
            arr.push(byte[0]);
            arr.push(byte[1]);
           }
           else{
               arr.push(operands[1]);
           }
    }
    //segemnt register to memory/register
    else if(/M|R/.test(operands[2])  && /RS/.test(operands[3]))
    {
        arr.push(0b10001100);
        arr.push((mode<<6)+(regToId(operands[0])<<3)+regMem(operands));
    }
    // memory/register to segment register
    else if(/RS/.test(operands[2])  && /R|M/.test(operands[3]))
    {
        arr.push(0b10001110);
        arr.push((mode<<6)+(regToId(operands[0])<<3)+regMem(operands));
    }
  
    break;

  case "PUSH":
      if(/RS/.test(operands[1]))
      {
          arr.push(0b01010000+regMem(operands));
      }
      else if(/R|M/.test(operands[1]))
      {
          arr.push(0b11111111);
          arr.push(((getMod(operands))<<6)+0b110000+regMem(operands));
      }

   break;
  case "POP" :
   break;
    case "XCHG" :
    break;
    case "LEA" :
    break;

    case "LAHF":
    arr.push(0b10011111);
    break;
    case "SAHF":
    arr.push(0b10011110);
    break;
    case "PUSHF":
    arr.push(0b10011100);
    break;
    case "POPF":
    arr.push(0b10011100);
    break;
    case "ADD":
    break;
    case "ADC":
    break;
    case "AAA" :
    arr.push(0b00110111);
    break;             
    case "INC": 
    break;
    case "SUB": 
    break;
    case "SSB": 
    break;
    case "DEC": 
    break;
    case "CMP":
    break;
    case "MUL": 
    break;
    case "IMUL": 
    break;
    case "CBW": 
    arr.push(0b10011000);
    break;
    case"CWD":
    arr.push(0b10011001);
    break;
    case "NOT" :break; 
    case "SHL" :break;
    case "SHR" :break;
    case "SAR" :break;
    case "ROL" :break;
    case "ROR" :break;
    case "RCL" :break; 
    case "RCR" :break;
    case "AND" :break;
    case "XOR" :break;
    case "OR" :break;
    case "TEST": break;
    case "CALL" :break;
    case "JUMP" :break;
    case "RET" :break;
    case "REP" :break; 
    case "MOVS": break; 
    case "CMPS" :break; 
    case "SCAS" :break;
    case "LODS" :break;
    case "STOS" :break;
    case "JE": case"JZ": 
    arr.push(0b01110100);
    break;
    case "JL" :case "JNGE": 
    arr.push(0b01111100);
    break;
    case"JLE" :case "JNG" :
    arr.push(0b01111110);
    break; 
    case"JB" :case "JNAE" :
    arr.push(0b01110010);
    break; 
    case"JBE": case "JNA": 
    arr.push(0b01110110);
    break; 
    case "JP" :case "JPE":
    arr.push(0b01111010); 
    break;
    case "JO": 
    arr.push(0b01110000);
    break; 
    case "JS":
    arr.push(0b01111000);
    break; 
    case "JNE" :case "JNZ":
    arr.push(0b01110101); 
    break; 
    case "JNL" :case "JGE":
    arr.push(0b01111101); 
    break; 
    case "JNLE" :case "JG":
    arr.push(0b01111111);
    break; 
    case "JNB": case "JAE":
    arr.push(0b01110011);
    break; 
    case "JNBE":case "JA":
    arr.push(0b01110111);
    break; 
    case "JNP": case "JPO":
    arr.push(0b01111011);
    break; 
    case "JNO":
    arr.push(0b01110001);
    break; 
    case "JNS":
    arr.push(0b01111001);
    break; 
    case "LOOP":
    arr.push(0b11100010);
    break;
    case "LOOPZ":case "LOOPE":
    arr.push(0b11100001);
    break; 
    case "LOOPNZ":case "LOOPNE":
    arr.push(0b11100000);
    break; 
    case "JCXZ" :
    arr.push(0b11100011);
    break; 
    case "INT" :
    arr.push();
    break; 
    case "CLC":
    arr.push(0b11111000);
    break; 
    case "CMC":
    arr.push(0b11110101);
    break; 
    case "STC":
    arr.push(0b11111001);
    break; 
    case "CLD":
    arr.push(0b11111100);
    break; 
    case "STD":
    arr.push(0b11111101);
    break; 
    case "CLI":
    arr.push(0b11111010);
    break; 
    case "STI":
    arr.push(0b11111011);
    break; 
    case "HLT":
    arr.push(0b11110100);
    break; 

    
    }

    console.log(arr);
}
