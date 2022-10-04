let input = document.getElementById('input');

const width = 300;

input.addEventListener('change', (event) => {
    let image_file = event.target.files[0];

    let image_name = image_file.name;

    let reader = new FileReader;


    reader.readAsDataURL(image_file);

    reader.onload = (event) => {
        let image_url = event.target.result;

        let image = document.createElement("img");

        image.src = image_url;

        image.onload = (e) => {
            let canvas = document.createElement('canvas');

            let ratio = width / e.target.width;

            canvas.width = width;
            canvas.height = e.target.height * ratio;

            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            let new_image_url = context.canvas.toDataURL("image/jpeg", 90);

            let new_image = document.createElement('img');

            new_image.src = new_image_url;
            

            document.getElementById('wrapper').appendChild(new_image);

            let a = document.createElement('a');

            a.href = new_image_url;

            a.download = image_name;

            document.body.appendChild(a)

            a.click()
        }

    }
})