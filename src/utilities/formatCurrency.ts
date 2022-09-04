const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: 'EUR',
  style: 'currency',
});

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}
