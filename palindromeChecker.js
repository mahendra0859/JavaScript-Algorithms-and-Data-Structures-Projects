function palindrome(str) {
	let lowerReg = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
	lowerReg === lowerReg.split('').reverse().join('') ? console.log(`${str} is palindrome`) : console.log(`${str} is not palindrome`);
}
palindrome('A man, a plan, a canal. Panama');
palindrome('0_0 (: /-\ :) 0-0');
palindrome('eye');
palindrome('_eye');
palindrome('race car');
palindrome('never odd or even');

