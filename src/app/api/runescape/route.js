import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {

    const { runescape } = await req.json();

    if (runescape) {                    
        const runescapeData = [];

        const fetchData = await axios.get('https://templeosrs.com/api/player_stats.php?player=CHUMBABOY');

        let data = fetchData.data.data;

        runescapeData.push(
           [{skill: 'Attack', level: data.Attack_level, key: 'row1'},
            {skill: 'Hitpoints', level: data.Hitpoints_level, key: 'row2'},
            {skill: 'Mining', level: data.Mining_level, key: 'row3'},
            {skill: 'Strength', level: data.Strength_level, key: 'row1'},
            {skill: 'Agility', level: data.Agility_level, key: 'row2'},
            {skill: 'Smithing', level: data.Smithing_level, key: 'row3'},
            {skill: 'Defence', level: data.Defence_level, key: 'row1'},
            {skill: 'Herblore', level: data.Herblore_level, key: 'row2'},
            {skill: 'Fishing' , level: data.Fishing_level, key: 'row3'},
            {skill: 'Ranged', level: data.Ranged_level, key: 'row1'},
            {skill: 'Thieving', level: data.Thieving_level, key: 'row2'},
            {skill: 'Cooking', level: data.Cooking_level, key: 'row3'},
            {skill: 'Prayer', level: data.Prayer_level, key: 'row1'},
            {skill: 'Crafting', level: data.Crafting_level, key: 'row2'},
            {skill: 'Firemaking', level: data.Firemaking_level, key: 'row3'},
            {skill: 'Magic', level: data.Magic_level, key: 'row1'},
            {skill: 'Fletching', level: data.Fletching_level, key: 'row2'},
            {skill: 'Woodcutting', level: data.Woodcutting_level, key: 'row3'},
            {skill: 'Runecraft', level: data.Runecraft_level, key: 'row1'},
            {skill: 'Slayer', level: data.Slayer_level, key: 'row2'},
            {skill: 'Farming', level: data.Farming_level, key: 'row3'},
            {skill: 'Construction', level: data.Construction_level, key: 'row1'},
            {skill: 'Hunter', level: data.Hunter_level, key: 'row2'},
            {skill: 'Sailing', level: data.Sailing_level, key: 'row3'}]
        );
        return NextResponse.json(runescapeData);
    }
}