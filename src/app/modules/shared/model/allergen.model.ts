export class Allergen implements AllergenInterface{
    public name: string

    constructor(allergenCfg: AllergenInterface)
    {
        this.name = allergenCfg.name;
    }
}

interface AllergenInterface{
    name: string;
}
