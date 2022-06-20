
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        // *** clear out the container element
        container.innerHTML = '';

        for (const mushroom of mushrooms) {
            container.append(Mushroom({ mushroom }));
        }

    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}