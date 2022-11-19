export class Allergen implements AllergenInterface{

    public id: number
    public name: string

    constructor(allergenCfg: AllergenInterface)
    {
        this.name = allergenCfg.name;
        this.id = allergenCfg.id;
    }
}

interface AllergenInterface{
    id: number
    name: string;
}
