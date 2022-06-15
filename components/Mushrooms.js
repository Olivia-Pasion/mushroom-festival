
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        // *** clear out the container element
        container.innerHTML = '';
        // loop the mushrooms!
        // add one Mushroom component for each mushroom object
        for (const mushroom of mushrooms) {
        //     - call the Mushroom component with the mushroom object
            const image = Mushroom({ mushroom });
        //     - append the returned element to the container  
            container.append(image);
        }

    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}