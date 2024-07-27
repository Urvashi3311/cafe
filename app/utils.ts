
/**
 * Formats a number as a dollar amount.
 * 
 * @param {number | string} amount - The amount to format.
 * @returns {string} The formatted dollar amount.
 */
export function formatDollar(amount: number | string): string {
    const number = parseFloat(amount.toString());
    if (isNaN(number)) {
      return '$0.00';
    }
    return `$${number.toFixed(2)}`;
  }
  