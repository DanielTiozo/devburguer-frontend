import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51Q6DMTRpIk2zzP68WR4DJUQBc78B8UuL3beqU95D29edrw1FgfABFOSLHl9PhFxe9SYf4YY1MYt30RnEpS9JHTSy00ihuiy4TV',
);

export default stripePromise;
