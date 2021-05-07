const   MOV_RM_RM = 0x88,
        MOV_IMMEDIATE_TO_RM = 0xC6,
        MOV_IMMEDIATE_TO_R  = 0xb0,
        MOV_ACCUMULATOR_MEMORY = 0xA0,
        MOV_RM_SEGEMENT=0x8c,
        AND_RM_RM=0b001000,
        AND_IMMEDIATE_TO_R=0b1000000,
        AND_IMMEDIATE_TO_ACC=0b0010010,
        OR_RM_RM=0b0000100,
        OR_IMMEDIATE_TO_R=0b1000000,
        OR_IMMEDIATE_TO_ACC=0b0010010,
        XOR_RM_RM=0b001100,
        XOR_IMMEDIATE_TO_R=0b1000000,
        XOR_IMMEDIATE_TO_ACC=0b0011010,
        TEST_RM_RM=0b1000010,
        TEST_IMMEDIATE_TO_R=0b1111011,
        TEST_IMMEDIATE_TO_ACC=0b1010100,

        MOVS_INS=0b10100100,
        LODS_INS=0b10101100,
        STOS_INS=0b10101010
        MUL=0b11110110,
        DIV=0b11110110,
        INT=0b11001100,
        PUSH_REG_MEM=0xFF,
        POP_REG_MEM=0b10001111,
	RET_SEG=0b11000011,
        RET_INTERSEG=0b11001011,

        NOT=0b1111011,
        SHR=0b110100,
        SAR=0b110100,
        ROL=0b110100,
        ROR=0b110100,
        RCL=0b110100,
        RCR=0b110100,

        SHL_SAL=0b11010000,
        UNC_JUMP=0b01111110,
        CON_JMP=0b01110000,
        LOOP = 0b11100010,
        LOOPE = 0b11100001,
        LOOPNE = 0b11100000,


      	ADD_REG_MEM = 0x00,
        ADC_REG_MEM = 0x10,
        ARITHMETIC_IMM	= 0x80,
        ADD_ACC_IMM = 0x04,
        ADC_ACC_IMM = 0x14,
        SUB_REG_MEM = 0x28,
        SBB_REG_MEM = 0x18,
        SUB_ACC_IMM = 0x2C,
        SBB_ACC_IMM = 0x1C,//ila shek
        CBW			= 0x98,
        CWD			= 0x99,
        INC_REG		= 0x40,
        INC_REG_MEM = 0xFE,
        DEC_REG_MEM = 0xFE,
        JMP_SEG		= 0b11101001,
        JMP_SEG_SHORT	= 0b11101011,
        JMP_IND_SEG 	= 0xFF,
        JMP_DIR_INTSEG	= 0b11101010,
        CALL_DIR_SEG	= 0b11101000,
        CALL_DIR_INTSEG = 0b10011010,
      	SEG_OVER_PREF	= 0b00100110;

      
const   HIGH_REGISTER = 1,
        LOW_REGISTER = 2
const NO_DISP   = 0x00,
      IWEN_DISP = 0x01,
      SIN_DISP  = 0x02,
      REG_MODE  = 0x03;

const 	ADD_MODE 	= 0b000,
		ADC_MODE 	= 0b010,
		SUB_MODE	= 0b101,
		SBB_MODE	= 0b011,
		CMP_MODE	= 0b111,
		AND_MODE	= 0b100,
		OR_MODE		= 0b001,
		XOR_MODE	= 0b110;

		//0b0000ODITSZ0A0P0C
const	CARRY_FLAG 		= 0b0000000000000001,
		ZERO_FLAG		= 0b0000000001000000,
		PARITY_FLAG 	= 0b0000000000000100,
		SIGN_FLAG		= 0b0000000010000000,
		AUXILARY_FLAG	= 0b0000000000010000,
		OVERFLOW_FLAG	= 0b0000100000000000;

const   JE  =   0b0100,
        JL  =   0b1100,
        JLE =   0b1110,
        JB  =   0b0010,
        JBE =   0b0110,
        JP  =   0b1010,
        JO  =   0b0000,
        JS  =   0b1000,
        JNE =   0b0101,
        JNL =   0b1101,
        JNLE=   0b1111,
        JNB =   0b0011,
        JNBE=   0b0111,
        JNP =   0b1011,
        JNO =   0b0001,
        JNS =   0b1001;



