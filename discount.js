
function ticketPrice ( ticketQuantity) {
    const first100Price = 100;
    const seconde100Price = 90;
    const extraPrice = 70;

    if ( ticketQuantity <= 100) {
        const ticakerate = ticketQuantity * first100Price;
        return ticakerate;
    }
    else if ( ticketQuantity <= 200) {
        const ticket100Rate = 100 * first100Price;
        const existTicket = ticketQuantity - 100;
        const seconde100rate = existTicket * seconde100Price;
        const totalseconde100Price = ticket100Rate + seconde100rate;
        return totalseconde100Price;

    }
    else {
        const ticket100Rate = 100 * first100Price;
        const ticketSeconde100Rate = 100 * seconde100Price;
        const ticketExist = ticketQuantity -200 ;
        const existTicketPrice = ticketExist * extraPrice;
        const totalRestTicketPrice = ticket100Rate + ticketSeconde100Rate + existTicketPrice;
        return totalRestTicketPrice;
    }
}

const ticketNumber = ticketPrice(325);
console.log(ticketNumber);