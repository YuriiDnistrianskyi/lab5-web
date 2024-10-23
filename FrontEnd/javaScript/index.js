import { getAllStadiums, postStadium, deleteStadium } from '/api.js';

let stadiums = [];

const refetchAllStadiums = async () => {
    const allStadiums = await getAllStadiums();

    stadiums = allStadiums;

    renderItemsList(stadiums);
}

const onRemove = async (element) =>
    deleteStadium(element.target.id).then(refetchAllStadiums)

refetchAllStadiums();