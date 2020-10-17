$(function () {

    $('.tombolTambahData').on('click', function () {

        $('#judulModal').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data')
        $('#nama').val('');
        $('#alamat').val('');

    });

    $('.tampilModalUbah').on('click', function () {

        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data')
        $('.modal-body form').attr('action', 'http://localhost/htdocs/mvc/public/Mahasiswa/ubah')

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/htdocs/mvc/public/Mahasiswa/getubah',
            data: {
                id: id
            },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#id').val(data.id);
                $('#nama').val(data.nama);
                $('#alamat').val(data.alamat);
            }
        });

    });

});