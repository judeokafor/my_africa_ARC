export class User {
    id: Number;
    name: String;
    email: String;
    phone: String;
    address: {
        street: String;
        suite: String;
        city: String;
    };
    website: String;
    company: {
        name: String;
        catchPhrase: String;
        bs: String;
    }
}