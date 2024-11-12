function List(){
    const cars =[{id: 1, name: "Mercedes" ,drive: "manual"},
                 {id: 2, name: "Toyota", drive: "automatic"}, 
                 {id: 3, name: "Volkswagen", drive: "manual"},
                 {id: 4, name: "Mazda", drive: "automatic"}]

    const listItems = cars.map(car => <li key={car.id}>{car.name}</li>)

    return(<ol>{listItems}</ol>)
}

export default List