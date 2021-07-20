// extracts price in float float
const _preprocessPrice = (price) => parseFloat((price.replace(',', '')).slice(2))
// adds '$ ' and a ',' after each 3 digits
const _formatPrice = (price) => `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

export const getPriceAfterOffer = (price, offer, n_nights=1, n_rooms=1) => {
    /** computes price after discount
     * @params:
     * - price: string
     *      price of 1 night 1 room in the format `$ price`
     * - offer: string
     *      proposed discount in the format `offer%`
     * - n_nights: integer                            [optional]
     *      number of nights to book
     * - n_rooms: integer                            [optional]
     *      number of rooms to book
     * @returns:
     * - formated price: string in format `$ newPrice`
     **/
    const _price  = _preprocessPrice(price) * n_nights * n_rooms
    // get discount in float type, set to 0 if no offer
    const _discount = offer === undefined ? 0 : parseFloat(offer.slice(0, -1)) / 100 
    return _formatPrice(_price * (1 - _discount))
}

// validates user input ( used for number of room / nights)
export const isValidBookingNumber = (n) => (Number.isInteger(n) && n > 0)
