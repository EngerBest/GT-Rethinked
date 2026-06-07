ServerEvents.recipes(recipe => {
    recipe.shaped("farmersdelight:flint_knife", [
        ' A',
        'B '
    ], {
        A: "mptw:flint_fragment",
        B: "minecraft:stick"
    });

    recipe.shaped("farmersdelight:rope", [
        'AB',
        'BA'
    ], {
        A: "#minecraft:small_flowers",
        B: "farmersdelight:straw"
    });
})
