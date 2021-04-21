const dynamicPdf= (options, themeOptions)=>{
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Resume maker</title>
    <style>
        .about {
        width: 600px;
        margin: auto;
    </style>
</head>

<body>
    <div class="about">
    <div
      style="
        padding-left: 0px;
        width: 800px;
        min-height: 842px;
        padding-right: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: white;
        margin-right: 0px;
      "
    >
      <div style="text-align: center">
        <img
          src="https://unicef-bucket.s3.ap-southeast-1.amazonaws.com/img_logo.png"
          alt=""
          width="70"
          height="60"
        />
      </div>
      <br />
      <div style="text-align: center">
        <span style="font-size: 12px; font-family: Saysettha OT"
          >ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</span
        >
      </div>
      <div style="text-align: center">
        <span style="font-size: 12px; font-family: Saysettha OT"
          >ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນະຖາວອນ</span
        >
        <p style="font-size: 12px; font-family: Saysettha OT">-----000------</p>
      </div>
      <br />
      <div style="display: flex">
        <div>
          <img
            src="https://unicef-bucket.s3.ap-southeast-1.amazonaws.com/img_logo.png"
            alt=""
            width="70"
            height="60"
          />
        </div>
        <div>
          <p style="font-size: 12px; font-family: Saysettha OT">
            ສ່ວຍສາອາກອນປະຈຳນະຄອນຫຼວງ
          </p>
          <p style="font-size: 12px; font-family: Saysettha OT">
            ສ່ວຍສາອາກອນປະຈຳເມືອງຈັນທະຍູລີ
          </p>
        </div>
      </div>

      <div style="text-align: center; width: 530px">
        <span
          style="
            font-size: 14px;
            font-family: Saysettha OT;
            font-size: bold;
            padding-left: 130px;
          "
          >ແບບຟອມສຳລັບການຂໍເລກປະຈຳຕົວຜູ້ເສຍອາກອນ ສຳລັບບຸກຄົນ</span
        >
      </div>
      <br />
      <br />
      <div
        style="text-align: left; margin-top: 12px; display: block; width: 520px"
      >
        <span style="font-size: 14px; font-family: Saysettha OT"
          >I. ຂໍ້ມູນຜູ້ເສຍສ່ວຍສາອາກອນ</span
        >
        <p
          style="font-size: 12px; font-family: Saysettha OT; padding-left: 26px"
        >
          1. ຊື່ ແລະ ນາມສະກູນ ${options.name}
        </p>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 43px;
              "
            >
              ວັນເດືອນປີເກີດ ${options.birth}
            </p>
          </div>
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 50px;
              "
            >
              ເພດ: <input type="checkbox" name="" id="" />ຍິງ/
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" name="" id="" />ຊາຍ
            </p>
          </div>
        </div>
        <p
          style="font-size: 12px; font-family: Saysettha OT; padding-left: 30px"
        >
          2. ປະເພດເອກະສານຢັ້ງຢືນ:
        </p>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 42px;
              "
            >
              <input type="checkbox" name="" id="" />ບັດປະຈຳຕົວ: ເລກທີ ${options.idcard}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" name="" id="" />ໜັງສືຜ່ານແດນ: ເລກທີ ${options.idpassport}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 42px;
              "
            >
              <input type="checkbox" name="" id="" />ສຳມະໂນຄົວ: ເລກທີ ${options.idCensus}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ສະຖານທີອອກສຳມະໂນຄົວ ${options.placeCensus}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 48px;
              "
            >
              ເລກບັນຊີ ${options.account}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ທະນາຄານ ${options.bank}
            </p>
          </div>
        </div>
        <p
          style="font-size: 12px; font-family: Saysettha OT; padding-left: 48px"
        >
          ເລກບັດປະກັນສັງຄົມ ${options.idEnsurance}
        </p>
        <br />
      </div>
      <div style="text-align: left; margin-top: 12px; width: 520px">
        <span style="font-size: 14px; font-family: Saysettha OT"
          >II. ຂໍ້ມູນຕິດຕໍ່ :</span
        >
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 30px;
              "
            >
              1. ທີຢູ່ຕາມເອກະສານຢັ້ງຢືນ: ບ້ານ ${options.village}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ເຮືອນເລກທີ ${options.idhome}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ໜ່ວຍ ${options.idGroup}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ຖະໜົນ ${options.idstreet}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 30px;
              "
            >
              2. ທີຢູ່ບ່ອນເຮັດວຽກ:
              ບ້ານ ${options.villageOffice}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ເຮືອນເລກທີ ${options.idOffice}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ໜ່ວຍ ${options.idGroupOffice}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ຖະໜົນ ${options.idStreetOffice}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 30px;
              "
            >
              3.
              ຕູ້ປນ: ${options.idPostal}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ໂທລະສັບ: ${options.phone}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ແພັກ: ${options.idFax}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ຖະໜົນ ${options.postalStreet}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 48px;
              "
            >
              ອີເມວ: ${options.email}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ໂທລະສັບມືຖື: ${options.phoneNumber}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              ຖະໜົນ ${options.street}
            </p>
          </div>
        </div>
      </div>
      <div
        style="text-align: left; margin-top: 12px; display: block; width: 100%"
      >
        <span style="font-size: 14px; font-family: Saysettha OT"
          >III. ການເຄຶ່ອນໄຫວກິດຈະການຂອງຜູ້ສ່ວຍສາອາກອນ :</span
        >
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 40px;
              "
            >
              <input type="checkbox" />
              ລັດຖະກອນ ${options.name1}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" />
              ຜູ້ເຮັດວຽກອິດສະຫຼະ ${options.name2}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" />
              ພະນັກງານເອກະຊົນ ${options.name3}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw; padding: 5px">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 37px;
              "
            >
              <input type="checkbox" />
              ອາກອນປັນຜົນ, ລິຂະສິດ ${options.name4}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" />
              ລາຍໄດ້ຈາກຄ່າເຊົ່າ ${options.name5}
            </p>
          </div>
        </div>
        <div style="display: flex; width: 100vw">
          <div>
            <p
              style="
                font-size: 12px;
                font-family: Saysettha OT;
                padding-left: 45px;
              "
            >
              <input type="checkbox" />
              ອາຊີບອື່ນໆ: ${options.name6}
            </p>
          </div>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              <input type="checkbox" />
              ລາຍໄດ້ອຶ່ນໆ: ${options.name7}
            </p>
          </div>
        </div>
      </div>
      <div style="display: flex; width: 800px" class="signature">
        <div
          style="
            border: 1px solid #000;
            height: 100px;
            width: 300px;
            margin-top: 35px;
          "
        >
          <p style="font-size: 12px; font-family: Saysettha OT">
            ສຳລັບເຈົ້າໜ້າທີ່ສ່ວຍສາອາກອນ :
          </p>
          <p
            style="
              font-size: 12px;
              font-family: Saysettha OT;
              padding-right: 120px;
            "
          >
            ເລກປະຈຳຕົວຜູ້ສ່ວຍສາອາກອນ :
          </p>
          <p
            style="
              font-size: 14px;
              font-family: Saysettha OT;
              padding-right: 250px;
            "
          >
            TIN: ${options.tinCode}
          </p>
        </div>
        <div>
          <p
            style="
              font-size: 14px;
              font-family: Saysettha OT;
              padding-left: 100px;
            "
          >
            ລາຍເຊັນຜູ້ຂໍເລກປະຈຳຕົວຜູ້ສ່ວຍສາອາກອນ
          </p>
          <br />
          <br />
          <br />
          <span
            style="
              font-size: 14px;
              font-family: Saysettha OT;
              text-decoration: underline;
              padding-right: 90px;
            "
          >
            ເອກະສານຕິດຄັດ:
          </span>
          <div>
            <p style="font-size: 12px; font-family: Saysettha OT">
              - ສຳເນົາ ບັດປະຈຳຕົວ
            </p>
            <p style="font-size: 12px; font-family: Saysettha OT">
              - ສຳເນົາ ສຳມະໂນຄົວ
            </p>
            <p style="font-size: 12px; font-family: Saysettha OT">
              - ສຳເນົາ ບັດປະກັນສັງຄົມ
            </p>
            <p style="font-size: 12px; font-family: Saysettha OT">
              - ສຳເນົາ ບັນຊີທະນາຄານ
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> -->

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>

</body>

</html>
    `;
}



module.exports = dynamicPdf ;