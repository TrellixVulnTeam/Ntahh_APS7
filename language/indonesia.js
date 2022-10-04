exports.serverErr = `Server sedang eror`
exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal(regTime) + ')' : '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ⚠️\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



🇺🇲 Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFIKASI BERHASIL* 」
│\`\`\`Verifikasi Sukses Dengan\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`Pada : ${b}\`\`\`
│\`\`\`Nama : ${c}\`\`\`
│\`\`\`Umur : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Nomor : @${f}\`\`\`
│\`\`\`Untuk menggunakan bot silahkan \`\`\`
│\`\`\`Kirim perintah ${g}menu\`\`\`
│\`\`\`atau ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} 🤗, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `❌ Tidak ada absen berlangsung di group ini !`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`✅ Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`✅ Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Masih Ada Sesi Yang Belum Diselesaikan!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Contoh penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find(v => v.includes(' ')) ? '(Beberapa Jawaban Terdapat Spasi)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time}`
}
exports.TbBendera = (time) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `✅ Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat kamu`
}
exports.AnonOn = () => {
    return `⚠️ Kamu masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `🔎 Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `⚠️ Kamu belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\nMenampilkan Semua Fitur Bot`
}
exports.InfoMenu = () => {
    return `\nCari Cari Imformasi..`
}
exports.KhususOwn = () => {
    return `\nFitur khusus owner bot`
}
exports.DataBor = () => {
    return `\nSimpan Simpan Di Database Bot`
}
exports.MenuGc = () => {
    return `\nHanya Bisa Diakses Di Grup`
}
exports.MenuAni = () => {
    return `\nMenu Mencari Foto Animeh`
}
exports.TagMem = () => {
    return `\nMenandai member grup`
}
exports.StalkOrk = () => {
    return `\nKepoin Media Sosial Orang Lain`
}
exports.Hoja = () => {
    return `\nMencari Sesuatu Yang Penting Penting`
}
exports.CovertWi = () => {
    return `\nMengubah/Convert Di Bot`
}
exports.AnuFoto = () => {
    return `\nBuat Gambar Menjadi Menarik`
}
exports.HajuStik = () => {
    return `\nBuat Stiker Menjadi Unik`
}
exports.EloDown= () => {
    return `\nDownload Video YouTube, TikTok, dll..`
}
exports.StikerWibu = () => {
    return `\nRandom Stiker Anime`
}
exports.ImageDewasa = () => {
    return `\nAnime 18+\n[ ! ] *Hanya Untuk Usia 18 Tahun Keatas*`
}
exports.MakeLogo = () => {
    return `\nBuat Logo Di Bot`
}
exports.oterMenu = () => {
    return `\nMenu Lainnya`
}
exports.GameBot = () => {
    return `\nNgegame Di Bot`
}
exports.RandRik = () => {
    return `\nVideo TikTok Acak`
}
exports.RandCew = () => {
    return `\nFoto Cewe Cantik Acak`
}
exports.RamalOi = () => {
    return `\nYang Percaya Ramalan`
}
exports.TeleStik= () => {
    return `\nStiker Telegram Acak`
}
exports.BuatLogoLagi = () => {
    return `\n_Buat Logo Lagi Di Bot, Hehe.._`
}
exports.SoundNih= () => {
    return `\nSuara/Lagu Acak`
}
exports.KanLogoLagi = () => {
    return `\n_Logo Mulu Ya.._`
}
exports.TobatBro = () => {
    return `\nTobat Nih Boss`
}
exports.MauJualan = () => {
    return `\nMau Jualan`
}
exports.Maustorage = () => {
    return `\nSet Cmd (Command), Sama Anu Anu Lainnya..`
}
exports.MauChanger = () => {
    return `\nFitur untuk mengubah suara audio / vn`
}
exports.GadaChat = () => {
    return `\nFitur untuk melakukan chat random`
}
exports.SumberBot = () => {
    return `\nEsce Bot Ini`
}
exports.Tqnya = () => {
    return `\nMakasih Yang Udah Jadi Kontributornya ♡`
}
exports.SetAh = () => {
    return `Mau Setting Menu Apa??`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
⚙️ Waktu (WIB) : *${time}*

┏━━「 Bot Info 」 
┃✾ .owner
┃✾ .rules
┃✾ .sc
┃✾ .ping
┃✾ .runtime
┃✾ .botstatus
┗ꕥ .donate


┏━━「 Owner 」 
┃✾ .setmenu [query]
┃✾ .setmenu templateLocation
┃✾ .setmenu templateTenor
┃✾ .setmenu katalog
┃✾ .setmenu katalog2
┃✾ .setmenu list
┃✾ .setwm packname|author
┃✾ .sendsesi
┃✾ .listpc
┃✾ .listgc
┃✾ .broadcast [text]
┃✾ .bc [text]
┃✾ .bcgc 
┃✾ .bcimage
┃✾ .bcaudio
┃✾ .bcstiker
┃✾ .bcvn
┃✾ .bcvideo
┃✾ .banuser
┃✾ .unban
┃✾ .banned
┃✾ .listbanned
┃✾ .block
┃✾ .ublock
┃✾ .listblock
┃✾ .addpremium
┃✾ .delpremium
┃✾ .listpremium
┃✾ .nsfw [on/off]
┃✾ .mute [on/off]
┃✾ .autoblok212 [on/off]
┃✾ .banchat
┃✾ .unbanchat
┃✾ .autorespond [on/off]
┃✾ .antiviewonce [on/off]
┃✾ .autobio [on/off]
┃✾ .join [link]
┃✾ .self
┃✾ .public [only bot]
┃✾ .del [reply pesan bot]
┃✾ .pppanjang
┃✾ .setpppanjang
┗ꕥ .setppbot [reply image]

┏━━「 Store Menu 」
┃✾ .list
┃✾ .addlist [key|respond]
┃✾ .dellist [key]
┃✾ .update [key|respond]
┃✾ .store
┃✾ .kali
┃✾ .bagi
┃✾ .tambah
┃✾ .kurang
┃✾ .kalkulator
┃✾ .setproses
┃✾ .updateproses
┃✾ .cekproses
┃✾ .delproses
┃✾ .setdone
┃✾ .updatedone
┃✾ .cekdone
┃✾ .deldone
┃✾ .pay
┃✾ .setcaptionpay
┃✾ .setpaysewa
┃✾ .proses
┗ꕥ .done

┏━━「 Anonymous 」
┃✾ .anonymous 
┃✾ .start
┃✾ .skip [daerah]
┗ꕥ .stop [surah|ayat]


┏━━「 Database 」 
┃✾ .setcmd [reply stiker]
┃✾ .delcmd [reply stiker]
┃✾ .listcmd
┃✾ .absen
┃✾ .cekabsen
┃✾ .deleteabsen
┃✾ .absenstart
┃✾ .addmsg [nama file]
┃✾ .getmsg [nama file]
┃✾ .listmsg
┗ꕥ .delmsg [nama file]

┏━━「 Rpg Games 」
┃✾ .adventure
┃✾ .weekly
┃✾ .use
┃✾ .transfer
┃✾ .slot
┃✾ .shop
┃✾ .pasar
┃✾ .profile
┃✾ .ojek
┃✾ .open
┃✾ .nguli
┃✾ .narik
┃✾ .nabung
┃✾ .monthly
┃✾ .mining
┃✾ .merampok
┃✾ .mancing
┃✾ .kolam
┃✾ .koboy
┃✾ .kerja
┃✾ .kandang
┃✾ .judi
┃✾ .inventory
┃✾ .hourly
┃✾ .fishop
┃✾ .feed
┃✾ .duel
┃✾ .daily
┃✾ .craft
┃✾ .cooldown
┃✾ .cook
┃✾ .collect
┃✾ .chop
┃✾ .casino
┃✾ .buy
┃✾ .bank 
┃✾ .bansos
┃✾ .berdagang
┃✾ .berkebon
┗ꕥ .build

┏━━「 Group 」 
┃✾ .addsewa
┃✾ .delsewa
┃✾ .register
┃✾ .unregister
┃✾ .ceksn
┃✾ .listonline
┃✾ .sider
┃✾ .wm packname|author
┃✾ .infochat
┃✾ .setdesk [text]
┃✾ .setppgrup [reply image]
┃✾ .pppanjanggc
┃✾ .setpppanjanggc
┃✾ .revoke
┃✾ .leave
┃✾ .add [62***]
┃✾ .kick @tag
┃✾ .leave
┃✾ .linkgc
┃✾ .welcome [on/off]
┃✾ .goodbye [on/off]
┃✾ .demotedetect [on/off]
┃✾ .promotedetect  [on/off]
┃✾ .setwelcome
┃✾ .updatewelcome
┃✾ .delwelcome
┃✾ .cekwelcome
┃✾ .setgoodbye
┃✾ .updategoodbye
┃✾ .delgoodbye
┃✾ .cekgoodbye
┃✾ .setpromote
┃✾ .updatepromote
┃✾ .setdemote
┃✾ .updatedemote
┃✾ .cekpromote
┃✾ .cekdemote
┃✾ .delpromote
┃✾ .deldemote
┃✾ .nsfw [on/off]
┃✾ .antilink [on/off]
┃✾ .take packname|author
┃✾ .group [open/close]
┃✾ .tagall [text]
┗ꕥ .hidetag [text]

┏━━「 Anime 」 
┃✾ .quotesanime
┃✾ .anime [query]
┃✾ .animeinfo
┃✾ .manga [query]
┗ꕥ .character [query]

┏━━「 Tag 」 
┃✾ .stickertag
┃✾ .videotag [query]
┃✾ .vntag [query]
┗ꕥ .imagetag [query]

┏━━「 Stalking 」 
┃✾ .igstalk [username]
┃✾ .ghstalk [username]
┗ꕥ .ytstalk [channel]


┏━━「 Search 」 
┃✾ .ytsearch [query]
┃✾ .wallpaper [query]
┃✾ .google [query]
┃✾ .wikimedia [query]
┃✾ .apksearch
┃✾ .findapk
┃✾ .hentai
┃✾ .wattpad [query]
┃✾ .webtoons [query]
┃✾ .drakor [query]
┗ꕥ .pinterest [query]


┏━━「 Converter 」
┃✾ .emoji [😭]
┃✾ .emojimix [😭+💩]
┃✾ .toaudio [video]
┃✾ .tomp3 [video]
┃✾ .tovn [video]
┃✾ .stiker [reply image]
┃✾ .tourl [image/video/stiker]
┃✾ .togif [sticker]
┃✾ .tomp4 [sticker]
┗ꕥ${prefix}toimg [reply sticker]


┏━━「 Image Effect 」 
┃✾ .wanted [reply image/stiker]
┃✾ .utatoo [reply image/stiker]
┃✾ .unsharpen [reply image/stiker]
┃✾ .thanos [reply image/stiker]
┃✾ .sniper [reply image/stiker]
┃✾ .sharpen [reply image/stiker]
┃✾ .sepia [reply image/stiker]
┃✾ .scary [reply image/stiker]
┃✾ .rip [reply image/stiker]
┃✾ .redple [reply image/stiker]
┃✾ .rejected [reply image/stiker]
┃✾ .posterize [reply image/stiker]
┃✾ .ps4 [reply image/stiker]
┃✾ .pixelize [reply image/stiker]
┃✾ .missionpassed [reply image/stiker]
┃✾ .moustache [reply image/stiker]
┃✾ .lookwhatkarenhave [reply image/stiker]
┃✾ .jail [reply image/stiker]
┃✾ .invert [reply image/stiker]
┃✾ .instagram [reply image/stiker]
┃✾ .greyscale [reply image/stiker]
┃✾ .glitch2 [reply image/stiker]
┃✾ .gay [reply image/stiker]
┃✾ .frame [reply image/stiker]
┃✾ .fire [reply image/stiker]
┃✾ .distort [reply image/stiker]
┃✾ .dictator [reply image/stiker]
┃✾ .deepfry [reply image/stiker]
┃✾ .ddungeon [reply image/stiker]
┃✾ .circle [reply image/stiker]
┃✾ .challenger [reply image/stiker]
┃✾ .burn [reply image/stiker]
┃✾ .brazzers [reply image/stiker]
┗ꕥ .beautiful [reply image/stiker]


┏━━「 Sticker Effect 」 
┃✾ .jail [reply image/stiker]
┃✾ .red [reply image/stiker]
┃✾ .gay [reply image/stiker]
┃✾ .bloo [reply image/stiker]
┃✾ .blue [reply image/stiker]
┃✾ .sepia [reply image/stiker]
┃✾ .green [reply image/stiker]
┃✾ .glass [reply image/stiker]
┃✾ .invert [reply image/stiker]
┃✾ .blurple [reply image/stiker]
┃✾ .blurple2 [reply image/stiker]
┃✾ .wasted [reply image/stiker]
┃✾ .passed [reply image/stiker]
┃✾ .triggered [reply image/stiker]
┃✾ .comrade [reply image/stiker]
┃✾ .greyscale [reply image/stiker]
┃✾ .threshold [reply image/stiker]
┃✾ .brightness [reply image/stiker]
┗ꕥ .invertgreyscale [reply image/stiker]


┏━━「 Download 」 
┃✾ .tiktok [link]
┃✾ .tiktoknowm [link]
┃✾ .tiktokwm [link]
┃✾ .tiktokaudio [link]
┃✾ .ytdl [link]
┃✾ .play [query]
┃✾ .ytmp3 [link]
┃✾ .ytshortmp3 [link]
┃✾ .ytmp4 [link]
┃✾ .ytshorts [link]
┃✾ .facebook [link]
┃✾ .facebooksd [link]
┃✾ .facebookhd [link]
┃✾ .fbaudio [link]
┃✾ .igstory [username]
┃✾ .igdl [link]
┃✾ .igphoto [link]
┃✾ .igvideo [link]
┃✾ .igreels [link]
┃✾ .igtv [link]
┃✾ .soundcloud [link]
┃✾ .gitclone [link repo]
┃✾ .gitrepo [username repo branch]
┃✾ .mediafire [link]
┗ꕥ .twitter link

┏━━「 Primbon 」
┃✾ .nomorhoki 887435047326
┃✾ .artimimpi [query]
┃✾ .artinama [query]
┃✾ .ramaljodoh
┃✾ .ramaljodohbali
┃✾ .suamiistri
┃✾ .ramalcinta
┃✾ .cocoknama
┃✾ .pasangan
┃✾ .jadiannikah
┃✾ .sifatusaha
┃✾ .rezeki
┃✾ .pekerjaan
┃✾ .nasib
┃✾ .penyakit
┃✾ .tarot
┃✾ .fengshui
┃✾ .haribaik
┃✾ .harisangar
┃✾ .harisial
┃✾ .nagahari
┃✾ .arahrezeki
┃✾ .peruntungan
┃✾ .weton
┃✾ .karakter
┃✾ .keberuntungan
┃✾ .memancing
┃✾ .masasubur
┃✾ .zodiak 
┗ꕥ .shio [query]

┏━━「 Random Anime 」
┃✾ .loli
┃✾ .neko
┃✾ .waifu
┃✾ .shinobu
┃✾ .megumin
┃✾ .bully
┃✾ .cuddle
┃✾ .cry
┃✾ .hug
┃✾ .awoo
┃✾ .kiss
┃✾ .lick
┃✾ .pat
┃✾ .smug
┃✾ .bonk
┃✾ .yeet
┃✾ .blush
┃✾ .smile
┃✾ .wave
┃✾ .highfive
┃✾ .handhold
┃✾ .nom
┃✾ .bite
┃✾ .glomp
┃✾ .slap
┃✾ .kill
┃✾ .happy
┃✾ .wink
┃✾ .poke
┃✾ .dance
┗ꕥ .cringe

┏━━「 Voice Change Menu 」
┃✾ .bass
┃✾ .blown
┃✾ .deep
┃✾ .earrape
┃✾ .fast
┃✾ .fat
┃✾ .nightcore
┃✾ .reverse
┃✾ .robot
┃✾ .slow
┃✾ .smooth
┗ꕥ .tupai

┏━━「 Storage Menu 」
┃✾ .addvn
┃✾ .listvn
┃✾ .delvn
┃✾ .addimage
┃✾ .listimage
┃✾ .delimage
┃✾ .addvideo
┃✾ .listvideo
┃✾ .delvideo
┃✾ .addstik
┃✾ .delstik
┗ꕥ .liststik

┏━━「 Nsfw & Sfw 」
┃✾ .cuddle
┃✾ .foxgirl
┃✾ .kemonomimi2
┃✾ .woof
┃✾ .holo2
┃✾ .hug
┃✾ .kiss
┃✾ .lizard
┃✾ .meowi
┃✾ .neko2
┃✾ .pat
┃✾ .poke
┃✾ .slap
┃✾ .tickle
┃✾ .baka
┃✾ .smug
┃✾ .neko_sfw
┃✾ .hentai
┃✾ .hentai_gif
┃✾ .spank
┃✾ .blowjob
┃✾ .cumarts
┃✾ .eroyuri
┃✾ .eroneko
┃✾ .erokemonomimi
┃✾ .erokitsune
┃✾ .ero
┃✾ .feet
┃✾ .erofeet
┃✾ .feetgif
┃✾ .femdom
┃✾ .futanari
┃✾ .holoero
┃✾ .holo
┃✾ .keta
┃✾ .kitsune
┃✾ .kemonomimi
┃✾ .pussyart
┃✾ .pussywankgif
┃✾ .girl_solo
┃✾ .girl_solo_gif
┃✾ .tits
┃✾ .trap
┃✾ .yuri
┃✾ .avatar2
┃✾ .anal
┃✾ .bj
┃✾ .boobs
┃✾ .classic
┃✾ .cumsluts
┃✾ .kuni
┃✾ .lesbian
┃✾ .neko
┃✾ .neko_gif
┃✾ .ahegao
┃✾ .bdsm
┃✾ .cuckold
┃✾ .cum
┃✾ .foot
┃✾ .gangbang
┃✾ .glasses
┃✾ .jahy
┃✾ .masturbation
┃✾ .nsfw_neko
┃✾ .orgy
┃✾ .panties
┃✾ .tentacles
┃✾ .thighs
┗ꕥ .zettai

┏━━「 Ephoto360 Menu 」
┃✾ .youtubegold
┃✾ .youtubesilver
┃✾ .facebookgold
┃✾ .facebooksilver
┃✾ .instagramgold
┃✾ .instagramsilver
┃✾ .twittergold
┃✾ .twittersilver
┃✾ .retrotext
┃✾ .halloweenbats
┃✾ .texthalloween
┃✾ .cardhalloween
┃✾ .birthdaycake
┃✾ .thundertext
┃✾ .icetext
┃✾ .milkcake
┃✾ .snowontext
┃✾ .metalstar
┃✾ .dragonfire
┃✾ .zombie3d
┃✾ .merrycard
┃✾ .generalexam 
┃✾ .viettel
┃✾ .embroider
┃✾ .graffititext
┃✾ .graffititext2
┃✾ .graffititext3
┃✾ .covergraffiti
┃✾ .moderngold
┃✾ .capercut
┃✾ .lovecard
┃✾ .heartflashlight
┃✾ .heartcup
┃✾ .sunglightshadow
┃✾ .graffiti3d
┃✾ .moderngoldsilver
┃✾ .moderngold2
┃✾ .moderngold3
┃✾ .fabrictext
┃✾ .masteryavatar
┃✾ .messagecoffee
┃✾ .announofwin
┃✾ .writeblood
┃✾ .horrorletter
┃✾ .writehorror
┃✾ .shirtclub
┃✾ .angelwing
┃✾ .christmasseason
┃✾ .projectyasuo
┃✾ .lovelycute
┃✾ .womansday
┃✾ .covergamepubg
┃✾ .nameonheart
┃✾ .funnyhalloween
┃✾ .lightningpubg
┃✾ .greetingcardvideo 
┃✾ .christmascard 
┃✾ .galaxybat
┃✾ .writegalaxy
┃✾ .starsnight
┃✾ .noeltext
┃✾ .textcakes
┃✾ .pubgbirthday
┃✾ .galaxywallpaper
┃✾ .pubgglicthvideo 
┃✾ .pubgmascotlogo
┃✾ .realembroidery
┃✾ .vintagetelevision
┃✾ .funnyanimations
┃✾ .glowingtext
┃✾ .textonglass
┃✾ .cartoonstyle
┃✾ .multicolor
┃✾ .watercolor2
┃✾ .textsky
┃✾ .summerbeach
┃✾ .1917text
┃✾ .puppycute
┗ꕥ .rosebirthday


┏━━「 Textpro Menu 」
┃✾ .halloween2 text|text2
┃✾ .horror text|text2
┃✾ .game8bit text|text2
┃✾ .layered text|text2
┃✾ .glitch2 text|text2
┃✾ .coolg text|text2
┃✾ .coolwg text|text2
┃✾ .realistic text|text2
┃✾ .space3d text|text2
┃✾ .gtiktok text|text2
┃✾ .stone text|text2
┃✾ .marvel text|text2
┃✾ .marvel2 text|text2
┃✾ .pornhub text|text2
┃✾ .avengers text|text2
┃✾ .metalr text|text2
┃✾ .metalg text|text2
┃✾ .metalg2 text|text2
┃✾ .halloween2 text|text2
┃✾ .lion text|text2
┃✾ .wolf_bw text|text2
┃✾ .wolf_g text|text2
┃✾ .ninja text|text2
┃✾ .3dsteel text|text2
┃✾ .horror2 text|text2
┃✾ .lava text|text2
┃✾ .bagel text|text2
┃✾ .blackpink text
┃✾ .rainbow2 text
┃✾ .water_pipe text
┃✾ .halloween text
┃✾ .sketch text
┃✾ .sircuit text
┃✾ .discovery text
┃✾ .metallic2 text
┃✾ .fiction text
┃✾ .demon text
┃✾ .transformer text
┃✾ .berry text
┃✾ .thunder text
┃✾ .magma text
┃✾ .3dstone text
┃✾ .neon text
┃✾ .glitch text
┃✾ .harry_potter text
┃✾ .embossed text
┃✾ .broken text
┃✾ .papercut text
┃✾ .gradient text
┃✾ .glossy text
┃✾ .watercolor text
┃✾ .multicolor text
┃✾ .neon_devil text
┃✾ .underwater text
┃✾ .bear text
┃✾ .wonderfulg text
┃✾ .christmas text
┃✾ .neon_light text
┃✾ .snow text
┃✾ .cloudsky text
┃✾ .luxury2 text
┃✾ .gradient2 text
┃✾ .summer text
┃✾ .writing text
┃✾ .engraved text
┃✾ .summery text
┃✾ .3dglue text
┃✾ .metaldark text
┃✾ .neonlight text
┃✾ .oscar text
┃✾ .minion text
┃✾ .holographic text
┃✾ .purple text
┃✾ .glossyb text
┃✾ .deluxe2 text
┃✾ .glossyc text
┃✾ .fabric text
┃✾ .neonc text
┃✾ .newyear text
┃✾ .newyear2 text
┃✾ .metals text
┃✾ .xmas text
┃✾ .blood text
┃✾ .darkg text
┃✾ .joker text
┃✾ .wicker text
┃✾ .natural text
┃✾ .firework text
┃✾ .skeleton text
┃✾ .balloon text
┃✾ .balloon2 text
┃✾ .balloon3 text
┃✾ .balloon4 text
┃✾ .balloon5 text
┃✾ .balloon6 text
┃✾ .balloon7 text
┃✾ .steel text
┃✾ .gloss text
┃✾ .denim text
┃✾ .decorate text
┃✾ .decorate2 text
┃✾ .peridot text
┃✾ .rock text
┃✾ .glass text
┃✾ .glass2 text
┃✾ .glass3 text
┃✾ .glass4 text
┃✾ .glass5 text
┃✾ .glass6 text
┃✾ .glass7 text
┃✾ .glass8 text
┃✾ .captain_as2 text
┃✾ .robot text
┃✾ .equalizer text
┃✾ .toxic text
┃✾ .sparkling text
┃✾ .sparkling2 text
┃✾ .sparkling3 text
┃✾ .sparkling4 text
┃✾ .sparkling5 text
┃✾ .sparkling6 text
┃✾ .sparkling7 text
┃✾ .decorative text
┃✾ .chocolate text
┃✾ .strawberry text
┃✾ .koifish text
┃✾ .bread text
┃✾ .matrix text
┃✾ .blood2 text
┃✾ .neonligth2 text
┃✾ .thunder2 text
┃✾ .3dbox text
┃✾ .neon2 text
┃✾ .roadw text
┃✾ .bokeh text
┃✾ .gneon text
┃✾ .advanced text
┃✾ .dropwater text
┃✾ .wall text
┃✾ .chrismast text
┃✾ .honey text
┃✾ .drug text
┃✾ .marble text
┃✾ .marble2 text
┃✾ .ice text
┃✾ .juice text
┃✾ .rusty text
┃✾ .abstra text
┃✾ .biscuit text
┃✾ .wood text
┃✾ .scifi text
┃✾ .metalr text
┃✾ .purpleg text
┃✾ .shiny text 
┃✾ .jewelry text
┃✾ .jewelry2 text
┃✾ .jewelry3 text
┃✾ .jewelry4 text
┃✾ .jewelry5 text
┃✾ .jewelry6 text
┃✾ .jewelry7 text
┃✾ .jewelry8 text
┃✾ .metalh text
┃✾ .golden text
┃✾ .glitter text
┃✾ .glitter2 text
┃✾ .glitter3 text
┃✾ .glitter4 text
┃✾ .glitter5 text
┃✾ .glitter6 text
┃✾ .glitter7 text
┃✾ .metale text
┃✾ .carbon text
┃✾ .candy text
┃✾ .metalb text
┃✾ .gemb text
┃✾ .3dchrome text
┃✾ .metalb2 text
┃✾ .metalg text
┗ꕥ .metalg text


┏━━「 Others 」
┃✾ .afk [reason]
┃✾ .translate kode_bahasa text
┃✾ .kalkulator [query]
┃✾ .smeme [text]
┃✾ .smeme2 [text|text]
┃✾ .memegen [text|text]
┗ꕥ

┏━━「 Game Menu 」
┃✾ .kuismath
┃✾ .tebakgambar
┃✾ .tebakkata
┃✾ .tebakbendera
┃✾ .tebakkalimat
┃✾ .tebaksiapa
┃✾ .tebakkabupaten
┃✾ .tebakkimia
┃✾ .tebaklirik
┃✾ .tebaktebakan
┃✾ .tekateki
┃✾ .susunkata
┗ꕥ .caklontong


┏━━「 Asupan Menu 」
┃✾ .chika
┃✾ .delvira
┃✾ .ayu
┃✾ .bunga
┃✾ .aura
┃✾ .nisa
┃✾ .ziva
┃✾ .yana
┃✾ .viona
┃✾ .syania
┃✾ .riri
┃✾ .syifa
┃✾ .mama_gina
┃✾ .alcakenya
┃✾ .mangayutri
┃✾ .rikagusriani
┃✾ .asupan
┃✾ .bocil
┃✾ .geayubi
┃✾ .santuy
┃✾ .ukhty
┗ꕥ .syifa

┏━━「 Telegram Sticker 」
┃✾ .awoawo
┃✾ .benedict
┃✾ .chat
┃✾ .dbfly
┃✾ .dino_kuning
┃✾ .doge
┃✾ .gojosatoru
┃✾ .hope_boy
┃✾ .jisoo
┃✾ .kr_robot
┃✾ .kucing
┃✾ .lonte
┃✾ .manusia_lidi
┃✾ .menjamet
┃✾ .meow
┃✾ .nicholas
┃✾ .patrick
┃✾ .popoci
┃✾ .sponsbob
┃✾ .kawan_sponsbob
┗ꕥ .tyni

┏━━「 Random Cewe 」
┃✾ .china 
┃✾ .indonesia 
┃✾ .malaysia 
┃✾ .thailand 
┃✾ .korea 
┃✾ .japan 
┃✾ .vietnam 
┃✾ .jenni 
┃✾ .jiso 
┃✾ .lisa  
┗ꕥ .rose

┏━━「 Logo Menu 」
┃✾ .coverbannerlol text|heroes
┃✾ .pubglogomaker text|style
┃✾ .colorfulpubg text|color
┃✾ .astronotspace text|style
┃✾ .wallpaperaov text|heroes
┃✾ .maketeamlogo text|style
┃✾ .circlemarcotteam text|logo
┃✾ .wallpaperml text|heroes
┃✾ .dragonballfb text|character
┃✾ .bannerofaov text|character
┃✾ .effect3donbeach text|background
┃✾ .cutegirlgamer text|logo
┃✾ .footballteam text|logo
┃✾ .beautifulshimmering text|champion
┃✾ .pubgcutelogo text|logo
┃✾ .elegantrotation text|logo
┃✾ .logogamingassasin text|logo
┃✾ .introvideomaker text|logo
┃✾ .gaminglogo4fvs text|logo
┃✾ .blueneon text|logo
┃✾ .metalmascot text|logo
┃✾ .anonymous2 text|style
┃✾ .lolpentakill text|style
┃✾ .avatarleagueofking text|style
┃✾ .avatarff text|character
┃✾ .overwatchwallpaper text|character
┃✾ .rovwallpaperhd text|hero
┃✾ .rovwallpaper text|avatar
┃✾ .beautifulgalaxylol text|style
┃✾ .crossfirecover text|character
┃✾ .lolwallpaper text|wallpaper
┃✾ .coverdota2 text|heroes
┃✾ .coverleagueofking text|character
┃✾ .avatar3q360 text|avatar
┃✾ .coverofwarface text|character
┃✾ .newlolavatar text|avatar
┃✾ .csgocover text|background
┃✾ .coverloknew text|hero
┃✾ .coverfblol text|letters
┃✾ .overwatchcover text|hero
┃✾ .crossfirestyle text|avatar
┃✾ .avatarlolbyname text|style
┃✾ .lolcoverbyname text|avatar
┃✾ .cyberhunterfb text|character
┃✾ .coverfreefirefb text|character
┃✾ .gamingmascot text|style
┃✾ .coveronepiecefb text|character
┃✾ .bannerytcsgo text|banner
┃✾ .fbgamepubgcover text|template
┃✾ .banneroflol text|text2|banner
┃✾ .bannerofaov2 text|text2|banner
┃✾ .teamlogo text|text2|background
┃✾ .companylogo2 text|text2|background
┃✾ .companylogo text|text2|background
┃✾ .gradientlogo text|text2|background
┃✾ .pencilsketch text|text2|icon
┃✾ .gunlogogaming text|text2|background
┃✾ .banneroffreefire text|text2|background
┃✾ .letterlogos text|text2|thumb
┃✾ .bannerofoverwatch text|text2|background
┃✾ .bannerofapex text|text2|background
┃✾ .bannerofpubg text|text2|background
┃✾ .mascotstyle text|text2|thumb
┃✾ .logoaccording text|text2|thumb
┗ꕥ .avataroverwatch text|text2|thumb


┏━━「 Islamic Menu 」
┃✾ .asmaulhusna
┃✾ .kisahnabi [nabi]
┃✾ .jadwalshalat [daerah]
┃✾ .randomquran
┃✾ .randomquran2
┃✾ .listsurah
┃✾ .tafsirsurah [surah]
┗ꕥ .alquranaudio [surah|ayat]

┏━━「 Sound Menu 」
┃✾ .sound1
┃✾ .sound2
┃✾ .sound3
┃✾ .sound4
┃✾ .sound5
┃✾ .sound6
┃✾ .sound7
┃✾ .sound8
┃✾ .sound9
┃✾ .sound10
┃✾ .sound11
┃✾ .sound12
┃✾ .sound13
┃✾ .sound14
┃✾ .sound15
┃✾ .sound16
┃✾ .sound17
┃✾ .sound18 
┃✾ .sound19
┃✾ .sound20
┃✾ .sound21
┃✾ .sound22
┃✾ .sound23
┃✾ .sound24
┃✾ .sound25
┃✾ .sound26
┃✾ .sound27
┃✾ .sound28
┃✾ .sound29
┃✾ .sound30
┃✾ .sound31
┃✾ .sound32
┃✾ .sound33
┃✾ .sound34
┃✾ .sound35
┃✾ .sound36
┃✾ .sound37
┃✾ .sound38
┃✾ .sound39
┃✾ .sound40
┃✾ .sound41
┃✾ .sound42
┃✾ .sound43
┃✾ .sound44
┃✾ .sound45
┃✾ .sound46
┃✾ .sound47
┃✾ .sound48
┃✾ .sound49
┃✾ .sound50
┃✾ .sound51
┃✾ .sound52
┃✾ .sound53
┃✾ .sound54
┃✾ .sound55
┃✾ .sound56
┃✾ .sound57
┃✾ .sound58
┃✾ .sound59
┃✾ .sound60
┃✾ .sound61
┃✾ .sound62
┃✾ .sound63
┃✾ .sound64
┃✾ .sound65
┃✾ .sound66
┃✾ .sound67
┃✾ .sound68
┃✾ .sound69
┗ꕥ .sound70

┏━━「 TqTo 」 
┃✾ My God
┃✾ My Parents
┃✾ Fatih A.
┃✾ Ferdi
┃✾ DikaArdnt
┃✾ Mhankbarbar
┃✾ Nurutomo
┃✾ Rashid
┃✾ ZeeoneOfc
┃✾ Penyedia Module
┗ꕥ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
│○ 𝖴𝗆𝗎𝗋 :
│○ 𝖦𝖾𝗇𝖽𝖾𝗋 :
│○ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Buat kalian yang sudah donasi bisa kirim bukti
donasi ke owner agar bisa di masukkan ke list donasi

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ !setmenu [query]
│○ !setmenu templateLocation
│○ !setmenu templateTenor
│○ !setmenu katalog
│○ !setmenu katalog2
│○ !setmenu list
│○ !setwm packname|author
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast [text]
│○ !bc [text]
│○ !bcgc 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw [on/off]
│○ !mute [on/off]
│○ !autoblok212 [on/off]
│○ !banchat
│○ !unbanchat
│○ !autorespond [on/off]
│○ !antiviewonce [on/off]
│○ !autobio [on/off]
│○ !join [link]
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ !setcmd [reply stiker]
│○ !delcmd [reply stiker]
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg [nama file]
│○ !getmsg [nama file]
│○ !listmsg
╰❒ !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk [text]
│○ !setppgrup [reply image]
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add [62***]
│○ !kick @tag
│○ !leave
│○ !linkgc
│○ !welcome [on/off]
│○ !goodbye [on/off]
│○ !demotedetect [on/off]
│○ !promotedetect  [on/off]
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw [on/off]
│○ !antilink [on/off]
│○ !take packname|author
│○ !group [open/close]
│○ !tagall [text]
╰❒ !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ !quotesanime
│○ !anime [query]
│○ !animeinfo
│○ !manga [query]
╰❒ !character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag [query]
│○ !vntag [query]
╰❒ !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ !igstalk [username]
│○ !ghstalk [username]
╰❒ !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ !ytsearch [query]
│○ !wallpaper [query]
│○ !google [query]
│○ !wikimedia [query]
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad [query]
│○ !webtoons [query]
│○ !drakor [query]
│○ !brainly [query]
╰❒ !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio [video]
│○ !tomp3 [video]
│○ !tovn [video]
│○ !stiker [reply image]
│○ !tourl [image/video]
│○ !togif [sticker]
│○ !tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ !wanted [reply image/stiker]
│○ !utatoo [reply image/stiker]
│○ !unsharpen [reply image/stiker]
│○ !thanos [reply image/stiker]
│○ !sniper [reply image/stiker]
│○ !sharpen [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !scary [reply image/stiker]
│○ !rip [reply image/stiker]
│○ !redple [reply image/stiker]
│○ !rejected [reply image/stiker]
│○ !posterize [reply image/stiker]
│○ !ps4 [reply image/stiker]
│○ !pixelize [reply image/stiker]
│○ !missionpassed [reply image/stiker]
│○ !moustache [reply image/stiker]
│○ !lookwhatkarenhave [reply image/stiker]
│○ !jail [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !instagram [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !glitch [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !frame [reply image/stiker]
│○ !fire [reply image/stiker]
│○ !distort [reply image/stiker]
│○ !dictator [reply image/stiker]
│○ !deepfry [reply image/stiker]
│○ !ddungeon [reply image/stiker]
│○ !circle [reply image/stiker]
│○ !challenger [reply image/stiker]
│○ !burn [reply image/stiker]
│○ !brazzers [reply image/stiker]
╰❒ !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ !jail [reply image/stiker]
│○ !red [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !bloo [reply image/stiker]
│○ !blue [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !green [reply image/stiker]
│○ !glass [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !blurple [reply image/stiker]
│○ !blurple2 [reply image/stiker]
│○ !wasted [reply image/stiker]
│○ !passed [reply image/stiker]
│○ !triggered [reply image/stiker]
│○ !comrade [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !threshold [reply image/stiker]
│○ !brightness [reply image/stiker]
╰❒ !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ !tiktok [link]
│○ !tiktoknowm [link]
│○ !tiktokwm [link]
│○ !tiktokaudio [link]
│○ !ytdl [link]
│○ !play [query]
│○ !ytmp3 [link]
│○ !ytshortmp3 [link]
│○ !ytmp4 [link]
│○ !ytshorts [link]
│○ !facebook [link]
│○ !facebooksd [link]
│○ !facebookhd [link]
│○ !fbaudio [link]
│○ !igstory [username]
│○ !igdl [link]
│○ !igphoto [link]
│○ !igvideo [link]
│○ !igreels [link]
│○ !igtv [link]
│○ !soundcloud [link]
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire [link]
╰❒ !twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ !cuddle
│○ !feed
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko_sfw
│○ !hentai
│○ !hentai_gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !hentai
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl_solo
│○ !girl_solo_gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko_gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw_neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ !halloween2 text|text2
│○ !horror text|text2
│○ !game8bit text|text2
│○ !layered text|text2
│○ !glitch2 text|text2
│○ !coolg text|text2
│○ !coolwg text|text2
│○ !realistic text|text2
│○ !space3d text|text2
│○ !gtiktok text|text2
│○ !stone text|text2
│○ !marvel text|text2
│○ !marvel2 text|text2
│○ !pornhub text|text2
│○ !avengers text|text2
│○ !metalr text|text2
│○ !metalg text|text2
│○ !metalg2 text|text2
│○ !halloween2 text|text2
│○ !lion text|text2
│○ !wolf_bw text|text2
│○ !wolf_g text|text2
│○ !ninja text|text2
│○ !3dsteel text|text2
│○ !horror2 text|text2
│○ !lava text|text2
│○ !bagel text|text2
│○ !blackpink text
│○ !rainbow2 text
│○ !water_pipe text
│○ !halloween text
│○ !sketch text
│○ !sircuit text
│○ !discovery text
│○ !metallic2 text
│○ !fiction text
│○ !demon text
│○ !transformer text
│○ !berry text
│○ !thunder text
│○ !magma text
│○ !3dstone text
│○ !neon text
│○ !glitch text
│○ !harry_potter text
│○ !embossed text
│○ !broken text
│○ !papercut text
│○ !gradient text
│○ !glossy text
│○ !watercolor text
│○ !multicolor text
│○ !neon_devil text
│○ !underwater text
│○ !bear text
│○ !wonderfulg text
│○ !christmas text
│○ !neon_light text
│○ !snow text
│○ !cloudsky text
│○ !luxury2 text
│○ !gradient2 text
│○ !summer text
│○ !writing text
│○ !engraved text
│○ !summery text
│○ !3dglue text
│○ !metaldark text
│○ !neonlight text
│○ !oscar text
│○ !minion text
│○ !holographic text
│○ !purple text
│○ !glossyb text
│○ !deluxe2 text
│○ !glossyc text
│○ !fabric text
│○ !neonc text
│○ !newyear text
│○ !newyear2 text
│○ !metals text
│○ !xmas text
│○ !blood text
│○ !darkg text
│○ !joker text
│○ !wicker text
│○ !natural text
│○ !firework text
│○ !skeleton text
│○ !balloon text
│○ !balloon2 text
│○ !balloon3 text
│○ !balloon4 text
│○ !balloon5 text
│○ !balloon6 text
│○ !balloon7 text
│○ !steel text
│○ !gloss text
│○ !denim text
│○ !decorate text
│○ !decorate2 text
│○ !peridot text
│○ !rock text
│○ !glass text
│○ !glass2 text
│○ !glass3 text
│○ !glass4 text
│○ !glass5 text
│○ !glass6 text
│○ !glass7 text
│○ !glass8 text
│○ !captain_as2 text
│○ !robot text
│○ !equalizer text
│○ !toxic text
│○ !sparkling text
│○ !sparkling2 text
│○ !sparkling3 text
│○ !sparkling4 text
│○ !sparkling5 text
│○ !sparkling6 text
│○ !sparkling7 text
│○ !decorative text
│○ !chocolate text
│○ !strawberry text
│○ !koifish text
│○ !bread text
│○ !matrix text
│○ !blood2 text
│○ !neonligth2 text
│○ !thunder2 text
│○ !3dbox text
│○ !neon2 text
│○ !roadw text
│○ !bokeh text
│○ !gneon text
│○ !advanced text
│○ !dropwater text
│○ !wall text
│○ !chrismast text
│○ !honey text
│○ !drug text
│○ !marble text
│○ !marble2 text
│○ !ice text
│○ !juice text
│○ !rusty text
│○ !abstra text
│○ !biscuit text
│○ !wood text
│○ !scifi text
│○ !metalr text
│○ !purpleg text
│○ !shiny text 
│○ !jewelry text
│○ !jewelry2 text
│○ !jewelry3 text
│○ !jewelry4 text
│○ !jewelry5 text
│○ !jewelry6 text
│○ !jewelry7 text
│○ !jewelry8 text
│○ !metalh text
│○ !golden text
│○ !glitter text
│○ !glitter2 text
│○ !glitter3 text
│○ !glitter4 text
│○ !glitter5 text
│○ !glitter6 text
│○ !glitter7 text
│○ !metale text
│○ !carbon text
│○ !candy text
│○ !metalb text
│○ !gemb text
│○ !3dchrome text
│○ !metalb2 text
│○ !metalg text
╰❒ !metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ !ttp [text]
│○ !attp [text]
│○ !afk [reason]
│○ !translate kode_bahasa text
│○ !kalkulator [query]
│○ !smeme [text]
│○ !smeme2 [text|text]
╰❒ !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdi
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ Rashid
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi [query]
│○ !artinama [query]
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ !youtubegold text
│○ !youtubesilver text
│○ !facebookgold text
│○ !facebooksilver text
│○ !instagramgold text
│○ !instagramsilver text
│○ !twittergold text
│○ !twittersilver text
│○ !retrotext text
│○ !halloweenbats text
│○ !texthalloween text
│○ !cardhalloween text
│○ !birthdaycake text
│○ !thundertext text
│○ !icetext text
│○ !milkcake text
│○ !snowontext text
│○ !metalstar text
│○ !dragonfire text
│○ !zombie3d text
│○ !merrycard text
│○ !generalexam text 
│○ !viettel text
│○ !embroider text
│○ !graffititext text
│○ !graffititext2 text
│○ !graffititext3 text
│○ !covergraffiti text
│○ !moderngold text
│○ !capercut text
│○ !lovecard text
│○ !heartflashlight text
│○ !heartcup text
│○ !sunglightshadow text
│○ !graffiti3d text
│○ !moderngoldsilver text
│○ !moderngold2 text
│○ !moderngold3 text
│○ !fabrictext text
│○ !masteryavatar text
│○ !messagecoffee text
│○ !announofwin text
│○ !writeblood text
│○ !horrorletter text
│○ !writehorror text
│○ !shirtclub text
│○ !angelwing text
│○ !christmasseason text
│○ !projectyasuo text
│○ !lovelycute text
│○ !womansday text
│○ !covergamepubg text
│○ !nameonheart text
│○ !funnyhalloween text
│○ !lightningpubg text
│○ !greetingcardvideo text 
│○ !christmascard text 
│○ !galaxybat text
│○ !writegalaxy text
│○ !starsnight text
│○ !noeltext text
│○ !textcakes text
│○ !pubgbirthday text
│○ !galaxywallpaper text
│○ !pubgglicthvideo text 
│○ !pubgmascotlogo text
│○ !realembroidery text
│○ !vintagetelevision text
│○ !funnyanimations text
│○ !glowingtext text
│○ !textonglass text
│○ !cartoonstyle text
│○ !multicolor text
│○ !watercolor2 text
│○ !textsky text
│○ !summerbeach text
│○ !1917text text
│○ !puppycute text
│○ !rosebirthday text
│○ !steellettering text|text2
│○ !letterstext text|text2
│○ !barcashirt text|text2
│○ !premiercup text|text2
│○ !stylepoligon text|text2
│○ !lifebuoys text|text2
╰❒ !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ !coverbannerlol text|heroes
│○ !pubglogomaker text|style
│○ !colorfulpubg text|color
│○ !astronotspace text|style
│○ !wallpaperaov text|heroes
│○ !maketeamlogo text|style
│○ !circlemarcotteam text|logo
│○ !wallpaperml text|heroes
│○ !dragonballfb text|character
│○ !bannerofaov text|character
│○ !effect3donbeach text|background
│○ !cutegirlgamer text|logo
│○ !footballteam text|logo
│○ !beautifulshimmering text|champion
│○ !pubgcutelogo text|logo
│○ !elegantrotation text|logo
│○ !logogamingassasin text|logo
│○ !introvideomaker text|logo
│○ !gaminglogo4fvs text|logo
│○ !blueneon text|logo
│○ !metalmascot text|logo
│○ !anonymous2 text|style
│○ !lolpentakill text|style
│○ !avatarleagueofking text|style
│○ !avatarff text|character
│○ !overwatchwallpaper text|character
│○ !rovwallpaperhd text|hero
│○ !rovwallpaper text|avatar
│○ !beautifulgalaxylol text|style
│○ !crossfirecover text|character
│○ !lolwallpaper text|wallpaper
│○ !coverdota2 text|heroes
│○ !coverleagueofking text|character
│○ !avatar3q360 text|avatar
│○ !coverofwarface text|character
│○ !newlolavatar text|avatar
│○ !csgocover text|background
│○ !coverloknew text|hero
│○ !coverfblol text|letters
│○ !overwatchcover text|hero
│○ !crossfirestyle text|avatar
│○ !avatarlolbyname text|style
│○ !lolcoverbyname text|avatar
│○ !cyberhunterfb text|character
│○ !coverfreefirefb text|character
│○ !gamingmascot text|style
│○ !coveronepiecefb text|character
│○ !bannerytcsgo text|banner
│○ !fbgamepubgcover text|template
│○ !banneroflol text|text2|banner
│○ !bannerofaov2 text|text2|banner
│○ !teamlogo text|text2|background
│○ !companylogo2 text|text2|background
│○ !companylogo text|text2|background
│○ !gradientlogo text|text2|background
│○ !pencilsketch text|text2|icon
│○ !gunlogogaming text|text2|background
│○ !banneroffreefire text|text2|background
│○ !letterlogos text|text2|thumb
│○ !bannerofoverwatch text|text2|background
│○ !bannerofapex text|text2|background
│○ !bannerofpubg text|text2|background
│○ !mascotstyle text|text2|thumb
│○ !logoaccording text|text2|thumb
╰❒ !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi [nabi]
│○ !jadwalshalat [daerah]
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah [surah]
╰❒ !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ !menfess
│○ !anonymous 
│○ !start
│○ !skip [daerah]
╰❒ !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ !proses
╰❒ !done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai
`
}
exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !profile
│○ !pasar
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ !battlegrounds-logo
│○ !battlefield4
│○ !text-8bit
│○ !typography-flower 
│○ !under-flower 
│○ !bevel-text 
│○ !silk-text 
│○ !sweet-andy 
│○ !smoke-typography 
│○ !carvedwood 
│○ !scary-cemetery 
│○ !royallook 
│○ !coffeecup2 
│○ !illuminated 
│○ !harry-potter2 //
│○ !woodblack //
│○ !butterfly-reflection //
│○ !watermelon // 
│○ !striking // 
│○ !metallicglow //
│○ !rainbow-text 
│○ !birthday-cake 
│○ !embroidery // 
│○ !crisp 
│○ !flaming 
│○ !furtext 
│○ !nightsky 
│○ !glow-rainbow 
│○ !gradient-avatar 
│○ !white-cube // 
│○ !honey-text // 
│○ !vintage-style //
│○ !glowing-3d // 
│○ !army-camouflage 
│○ !graffiti-cover 
│○ !rainbow-shine 
│○ !smoky-neon 
│○ !quotes-underfall //
│○ !layered-leaves 
│○ !vector-nature 
│○ !yellow-rose 
│○ !love-text 
│○ !underwater-ocean 
│○ !nature-text 
│○ !wolf-metal 
│○ !summer-text 
│○ !wooden-board //
│○ !flower-heart
│○ !quote-wood 
│○ !love-text 
│○ !quotes-undergrass 
│○ !naruto-banner 
│○ !love-message 
│○ !textoncup2 
│○ !burn-paper 
│○ !smoke 
│○ !romantic-messages 
│○ !shadow-sky 
│○ !text-cup 
╰❒ !coffecup
`
}
exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70
`
}


