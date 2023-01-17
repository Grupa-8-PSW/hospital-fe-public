export class Address implements AddressInterface{

    public country: string = '';
    public city: string = '';
    public street: string = '';
    public number: number = 0;

    constructor() {
    }

}

interface AddressInterface{
    country: string;
    city: string;
    street: string;
    number: number;
}