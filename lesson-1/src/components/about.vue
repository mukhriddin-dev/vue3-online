<template>
    <section>
        <div class="container">
            <div class="wrapper">
                <img src="https://picsum.photos/id/213/400/400" alt="smth photo">
                <div class="card">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, consequuntur tenetur,
                        voluptate
                        saepe soluta aliquam ab natus atque suscipit blanditiis fuga neque ut vitae dolorum dolore vero,
                        accusantium rem. Voluptates accusantium voluptas reprehenderit quis nesciunt dolorum
                        consequuntur
                        necessitatibus, enim in, doloremque quaerat? Unde, tenetur ad!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 80vh;
    padding: 80px 0;

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        gap: 40px;

        img {
            max-width: 100%;
            height: auto;
            cursor: pointer;
        }

        .card {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            cursor: pointer;

            h2 {
                margin-bottom: 10px;
            }
        }

    }
}
</style>