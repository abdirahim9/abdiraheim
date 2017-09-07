$(document).ready(function(){
  var maths, eng, kisw, sci, sstre, marks, position = 0;
  var firstname, middlename, surname, age, dateofbirth, father, mother, ocupation, contacts, address = "";

  $(".close").click(function() {
      $(".body").show();
  });

  $("#admissiontomodal").click(function(){
      $(".body").hide();
});

  $("#parenttomodal").click(function(){
      $(".body").hide();
});

    $("#teachertomodal").click(function(){
        $(".body").hide();
  });

    $("#closebtn").click(function() {
        $(".body").show();
    });

    $("#sendbtn").click(function() {

        maths = parseInt($("#mathsinput").val());
        eng = parseInt($("#enginput").val());
        kisw = parseInt($("#kiswinput").val());
        sci = parseInt($("#sciinput").val());
        sstre = parseInt($("#sstreinput").val());
        marks = (maths+eng+kisw+sci+sstre);
        position = parseInt($("#positioninput").val());
    });

    $("#submitbtn").click(function() {

        firstname = $("#firstnameinput").val();
        middlename = $("#middlenameinput").val();
        surname = $("#surnameinput").val();
        age = parseInt($("#ageinput").val());
        gender
        dateofbirth = $("#borninput").val();
        father = $("#fatherinput").val();
        mother = $("#motherinput").val();
        ocupation = $("#occupationinput").val();
        contacts = $("#contactsinput").val();
        address = $("#addressinput").val();

        $(".body").show();

    });

    $("#okbtn").click(function functionName() {
      $("#firstnameOutput").append(firstname);
      $("#ageOutput").append(age);
      $("sexOutput").append();
      $("positionOutput").append();

    });

});
