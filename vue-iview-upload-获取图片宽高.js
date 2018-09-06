/*!
 * :before-upload="detailBeforeUpload"
 */

function detailBeforeUpload(file) {
    return this.checkImageWH(file, 706, 397);
}

//返回一个promise  检测通过返回resolve  失败返回reject组织图片上传
function checkImageWH(file, width, height) {
    let self = this;
    return new Promise(function (resolve, reject) {
        let filereader = new FileReader();
        filereader.onload = e => {
            let src = e.target.result;
            const image = new Image();
            image.onload = function () {
                if (width && this.width != width) {
                    self.$Notice.error({
                        title: '请上传宽为' + width + "的图片",
                    });
                    reject();
                } else if (height && this.height != height) {
                    self.$Notice.error({
                        title: '请上传高为' + height + "的图片",
                    });
                    reject();
                } else {
                    resolve();
                }
            };
            image.onerror = reject;
            image.src = src;
        };
        filereader.readAsDataURL(file);
    });
}