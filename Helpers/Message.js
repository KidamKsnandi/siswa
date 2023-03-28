const messageTambah = function(data) {return {status: true, message: "Tambah Berhasil", data};}
const messageEdit = function(data) {return {status: true, message: "Edit Berhasil", data};}
const messageDelete = function(data) {return {status: true, message: "Delete Berhasil", data};}
const messagedaftar = function(data) {return {status: true, message: "Daftar Berhasil", data};}
const massagePassError = function() {return {status: false, message: "Old Password Not Valid!"};}
const massageError = function(err) {return {status: false, message: "Opps Ada Kesalahan! Silahkan Coba Beberapa Saat Lagi.", err};}
const massageErrorDouble = function() {return {status: false, message: "Nomor Telpon Sudah Ditambahkan Silahkan Gunakan Yang Lain"};}
const massageSalah = function() {return {status: false, message: "User Tidak Terdaftar!"};}
const massageUnautorized = function() {return {status: false, message: "Unauthorized !!"};}
const massageSecret = function() {return {status: false, message: "Akses Dilarang! "};}
const massageDilarang = function() {return {status: false, message: "Akses Dilarang!"};}

module.exports = {
    messageTambah,
    messageEdit,
    messageDelete,
    messagedaftar,
    massageError,
    massageErrorDouble,
    massageSalah,
    massageUnautorized,
    massageSecret,
    massageDilarang,
    massagePassError
}