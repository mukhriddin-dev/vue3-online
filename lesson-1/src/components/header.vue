<template>
    <header>
        <div class="container">
            <nav>
                <a href="#" class="logo">Vue.js</a>
                <ul class="list">
                    <li class="list_item"><a href="#" class="list_item-link">Home</a></li>
                    <li class="list_item"><a href="#" class="list_item-link">About</a></li>
                    <li class="list_item"><a href="#" class="list_item-link">Service</a></li>
                    <li class="list_item"><a href="#" class="list_item-link">Projects</a></li>
                    <li class="list_item"><a href="#" class="list_item-link">Contact</a></li>
                    <li class="list_item"><a href="#" class="list_item-link">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: #D2FF72;
    padding: 20px;
    width: 100%;
    color: #000000;

    nav {
        display: flex;
        justify-content: space-between;

        .logo {
            font-size: 32px;
            font-weight: bold;
            color: #000000;

        }

        .list {
            display: flex;
            list-style: none;
            gap: 20px;

            &_item {
                text-transform: uppercase;

                &-link {
                    text-decoration: none;
                    color: #000000;

                    &:hover {
                        color: #15B392;
                    }
                }
            }
        }

    }
}
</style>