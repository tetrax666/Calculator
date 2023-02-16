var calculator = (function() {
    var module = {};

    /**
     * Вычисление логарифма с произвольным основанием
     * @param {float} x - основание логарифма
     * @param {float} y - число, от которого требуется найти логарифм
     * @return {float}
     */
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    };

    /**
     * Вычисляет ежемесячный платёж по сроку ипотеки
     *
     * @param {float} sum - сумма кредита
     * @param {integer} period - срок в годах
     * @param {float} rate - годовая ставка в процентах
     * @return {integer} или Nan
     */
    module.getPayment = function(sum, period, rate) {
        var i,
            koef,
            result;

        // ставка в месяц
        i = (rate / 12) / 100;

        // коэффициент аннуитета
        koef = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);

        // итог
        result = sum * koef;

        // округлим до целых
        return result.toFixed();
    };

    /**
     * Вычисляет период выплаты ипотеки по ежемесячному платежу
     *
     * @param {float} sum - сумма кредита
     * @param {float} plat - ежемясячный платеж
     * @param {float} rate - годовая ставка в процентах
     * @return {integer} или Nan
     */
    module.getPeriod = function(sum, plat, rate) {
        var mm,
            i,
            result;

        // ставка в месяц
        i = (rate / 12) / 100;

        mm = plat / sum;
        result = getBaseLog(1 + i, -mm / (i - mm));

        // округлим до целых
        return Math.ceil(+result);
    };

    return module;
})();
