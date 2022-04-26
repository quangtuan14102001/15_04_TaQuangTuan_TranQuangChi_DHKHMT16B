$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    })

    function kiemtraMail() {
        var i = 1;
        let mauktEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if ($("#txtemail").val() == "") {
            $("#tbemail").html("Không được để trống");
            return false;
        }
        if (!mauktEmail.test($("#txtemail").val())) {
            $("#tbemail").html("Vui lòng nhập lại email");
            return true;
        }
        $("#tbemail").html("*");
        return true;
    }
    $("#txtemail").blur(kiemtraMail);

    function kiemtraten() {
        var i = 1;
        let mauktten = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if ($("#txtten").val() == "") {
            $("#tbten").html("Không được để trống");
            return false;
        }
        if (!mauktten.test($("#txtten").val())) {
            $("#tbten").html("Chữ cái đầu phải viết hoa, không dấu");
            return true;
        }
        $("#tbten").html("*");
        return true;
    }
    $("#txtten").blur(kiemtraten);


    function kiemtrapass() {
        var i = 1;
        let mauktpass = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,}$/;
        if ($("#txtpass").val() == "") {
            $("#tbpass").html("Không được để trống");
            return false;
        }
        if (!mauktpass.test($("#txtpass").val())) {
            $("#tbpass").html("Bắt đầu bằng ký tự hoa, tối thiểu 6 ký tự");
            return true;
        }
        $("#tbpass").html("*");
        return true;
    }
    $("#txtpass").blur(kiemtrapass);


})