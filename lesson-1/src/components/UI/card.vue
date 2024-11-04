<template>
    <div class="card">
        <img src="https://picsum.photos/id/211/300/240" alt="smth" class="card_img">
        <div class="card_body">
            <h2 class="card_title">Card Title</h2>
            <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui vel arcu
                vestibulum
                elementum. Nulla facilisi. Sed non erat vel metus malesuada tincidunt.</p>
            <button class="card_button">Click Me</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {

    width: 300px;
    height: 480px;
    background-color: #ffff;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px silver;

    &_body {
        padding: 15px;

        p {
            font-size: 18px;
            margin-bottom: 20px;
        }

        button {
            background-color: #54C392;
            padding: 8px;
        }
    }
}
</style>