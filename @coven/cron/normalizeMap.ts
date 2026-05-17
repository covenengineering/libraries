import { memo } from "@coven/memo";

/**
 * Map from 3 letter aliases to their respective number representations.
 */
export const normalizeMap: Readonly<{
	/* Days of the week */
	/** Sunday number representation */ sun: 0;
	/** Monday number representation */ mon: 1;
	/** Tuesday number representation */ tue: 2;
	/** Wednesday number representation */ wed: 3;
	/** Thursday number representation */ thu: 4;
	/** Friday number representation */ fri: 5;
	/** Saturday number representation */ sat: 6;

	/* Months */
	/** January number representation */ jan: 1;
	/** February number representation */ feb: 2;
	/** March number representation */ mar: 3;
	/** April number representation */ apr: 4;
	/** May number representation */ may: 5;
	/** June number representation */ jun: 6;
	/** July number representation */ jul: 7;
	/** August number representation */ aug: 8;
	/** September number representation */ sep: 9;
	/** October number representation */ oct: 10;
	/** November number representation */ nov: 11;
	/** December number representation */ dec: 12;
}> = memo({
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6,

	jan: 1,
	feb: 2,
	mar: 3,
	apr: 4,
	may: 5,
	jun: 6,
	jul: 7,
	aug: 8,
	sep: 9,
	oct: 10,
	nov: 11,
	dec: 12,
} as const);
