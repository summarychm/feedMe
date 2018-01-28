
export const polyfill = {
    //格式化11位电话号码
    phoneFormat: (phone) => {
        //console.log(phone,(phone + "").length);
        //if ((phone + "").length !== 11)
        if (!/^1[0-9]{10}$/.test(phone)) //正则判断
            return phone;
        phone = phone.slice(0, 2) + "-" + phone.slice(3, 7) + "-" + phone.slice(7);
        //console.log(phone);
        return phone;
    }
}