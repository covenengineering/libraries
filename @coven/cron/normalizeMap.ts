import { memo, type Memoized } from "@coven/memo";

/**
 * Map from 3 letter aliases to their respective number representations.
 */
export const normalizeMap: Memoized<
	Readonly<{
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
	}>
> = memo(
	{
		/* Days of the week */
		/** Sunday number representation */ sun: 0,
		/** Monday number representation */ mon: 1,
		/** Tuesday number representation */ tue: 2,
		/** Wednesday number representation */ wed: 3,
		/** Thursday number representation */ thu: 4,
		/** Friday number representation */ fri: 5,
		/** Saturday number representation */ sat: 6,

		/* Months */
		/** January number representation */ jan: 1,
		/** February number representation */ feb: 2,
		/** March number representation */ mar: 3,
		/** April number representation */ apr: 4,
		/** May number representation */ may: 5,
		/** June number representation */ jun: 6,
		/** July number representation */ jul: 7,
		/** August number representation */ aug: 8,
		/** September number representation */ sep: 9,
		/** October number representation */ oct: 10,
		/** November number representation */ nov: 11,
		/** December number representation */ dec: 12,
	} as const,
);
