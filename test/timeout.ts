export const timeout = (milliseconds = 0): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));
