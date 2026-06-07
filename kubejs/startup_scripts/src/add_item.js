StartupEvents.registry("item", item => {
    item.create("flint_hatchet", "axe")
        .displayName("Flint Hatchet")
        .tag("forge:tools/axes")
        .tag("forge:tools")
        .maxDamage(59)
        .tier("wood");
})
