import { v4 as uuidv4 } from 'uuid'

interface Item {
    id: string
    name: string;
    price: number;
    desc: string;
    img: string;
}

const newShortUUID = (): string => {
    const Uuid = uuidv4();
    // Tomar solo la primera parte del UUID
    const uuidCorto = Uuid.split('-')[0];
    return uuidCorto;
  };

const items: Item[] = [
    {   
        id: newShortUUID(),
        name: "Langosta Bogavante",
        price: 173000,
        desc: "Langosta Bogavante muy rica",
        img: "https://hipermarfish.com/pedidosonline/items/12346.jpg"
    },
    {   
        id: newShortUUID(),
        name: "Filete de Salmón Noruego Fresco ",
        price: 8400,
        desc: "Buen filete",
        img: "https://hipermarfish.com/pedidosonline/items/10050.jpg"
    },
    {   
        id: newShortUUID(),
        name: "Langosta Bogavante",
        price: 143000,
        desc: "Langosta Bogavante muy rica",
        img: "https://hipermarfish.com/pedidosonline/items/12346.jpg"
    },
    {   
        id: newShortUUID(),
        name: "Filete de Salmón Noruego Fresco ",
        price: 8400,
        desc: "Buen filete",
        img: "https://hipermarfish.com/pedidosonline/items/10050.jpg"
    },
    {   
        id: newShortUUID(),
        name: "Langosta Bogavante",
        price: 143000,
        desc: "Langosta Bogavante muy rica",
        img: "https://hipermarfish.com/pedidosonline/items/12346.jpg"
    },
];


export default items;
