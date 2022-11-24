
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━❲ *𝐁𝐄𝐑𝐊𝐀𝐇𝐄𝐒𝐏𝐎𝐑𝐓.𝐈𝐃* ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Total Fitur : 200+

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}menu
 ${no++} ➳ ${prefix}iklan
 ${no++} ➳ ${prefix}rules
 ${no++} ➳ ${prefix}owner
 ${no++} ➳ ${prefix}script
 ${no++} ➳ ${prefix}infobot
 ${no++} ➳ ${prefix}donasi
 ${no++} ➳ ${prefix}donate
 ${no++} ➳ ${prefix}jadibot
 ${no++} ➳ ${prefix}listjadibot
 ${no++} ➳ ${prefix}sewabot
 ${no++} ➳ ${prefix}groupbot
 ${no++} ➳ ${prefix}ownerinfo
 ${no++} ➳ ${prefix}infoowner

 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}verify
 ${no++} ➳ ${prefix}report
 ${no++} ➳ ${prefix}request
 ${no++} ➳ ${prefix}transfer
 ${no++} ➳ ${prefix}buatroom
 ${no++} ➳ ${prefix}secretchat
 ${no++} ➳ ${prefix}cekprem
 ${no++} ➳ ${prefix}daftarprem
 ${no++} ➳ ${prefix}changename

 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}error
 ${no++} ➳ ${prefix}clearerr
 ${no++} ➳ ${prefix}siaran
 ${no++} ➳ ${prefix}session
 ${no++} ➳ ${prefix}resetdb
 ${no++} ➳ ${prefix}runtime
 ${no++} ➳ ${prefix}setexif
 ${no++} ➳ ${prefix}setwm
 ${no++} ➳ ${prefix}setfooter
 ${no++} ➳ ${prefix}setppbot
 ${no++} ➳ ${prefix}addprem
 ${no++} ➳ ${prefix}delprem
 ${no++} ➳ ${prefix}bc
 ${no++} ➳ ${prefix}bctext
 ${no++} ➳ ${prefix}bcvideo
 ${no++} ➳ ${prefix}bcaudio
 ${no++} ➳ ${prefix}bcimage
 ${no++} ➳ ${prefix}broadcast

 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}kali 1 2
 ${no++} ➳ ${prefix}bagi 1 2
 ${no++} ➳ ${prefix}kurang 1 2
 ${no++} ➳ ${prefix}tambah 1 2
 ${no++} ➳ ${prefix}dellist key
 ${no++} ➳ ${prefix}addlist key@response
 ${no++} ➳ ${prefix}update key@response
 ${no++} ➳ ${prefix}done <reply orderan>
 ${no++} ➳ ${prefix}proses <reply orderan>
 ${no++} ➳ ${prefix}list <only group>
 ${no++} ➳ ${prefix}shop <only group>
 
 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}fitnah
 ${no++} ➳ ${prefix}delete
 ${no++} ➳ ${prefix}revoke
 ${no++} ➳ ${prefix}tagall
 ${no++} ➳ ${prefix}hidetag
 ${no++} ➳ ${prefix}setdesc
 ${no++} ➳ ${prefix}linkgrup
 ${no++} ➳ ${prefix}infogroup
 ${no++} ➳ ${prefix}setppgrup
 ${no++} ➳ ${prefix}setnamegrup
 ${no++} ➳ ${prefix}group open
 ${no++} ➳ ${prefix}group close
 ${no++} ➳ ${prefix}antilink on
 ${no++} ➳ ${prefix}antilink off
 ${no++} ➳ ${prefix}welcome on
 ${no++} ➳ ${prefix}welcome off
 ${no++} ➳ ${prefix}tiktokauto on
 ${no++} ➳ ${prefix}tiktokauto off
 ${no++} ➳ ${prefix}kick @tag
 ${no++} ➳ ${prefix}demote @tag
 ${no++} ➳ ${prefix}promote @tag


 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}tiktok
 ${no++} ➳ ${prefix}ytmp3
 ${no++} ➳ ${prefix}ytmp4
 ${no++} ➳ ${prefix}pinterest
 ${no++} ➳ ${prefix}playmp3
 ${no++} ➳ ${prefix}playmp4
 ${no++} ➳ ${prefix}gitclone
 ${no++} ➳ ${prefix}mediafire
 ${no++} ➳ ${prefix}wikimedia
 ${no++} ➳ ${prefix}soundcloud
 ${no++} ➳ ${prefix}infogempa

 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}tts
 ${no++} ➳ ${prefix}ttp
 ${no++} ➳ ${prefix}ttp2
 ${no++} ➳ ${prefix}attp
 ${no++} ➳ ${prefix}attp2
 ${no++} ➳ ${prefix}tourl
 ${no++} ➳ ${prefix}upload
 ${no++} ➳ ${prefix}toimg
 ${no++} ➳ ${prefix}toimage
 ${no++} ➳ ${prefix}tomp3
 ${no++} ➳ ${prefix}toaudio
 ${no++} ➳ ${prefix}tomp4
 ${no++} ➳ ${prefix}tovideo
 ${no++} ➳ ${prefix}emojimix
 ${no++} ➳ ${prefix}emojmix
 ${no++} ➳ ${prefix}emojinua
 ${no++} ➳ ${prefix}mixemoji
 ${no++} ➳ ${prefix}stiker
 ${no++} ➳ ${prefix}sticker
 ${no++} ➳ ${prefix}sgif
 ${no++} ➳ ${prefix}stikergif
 ${no++} ➳ ${prefix}stickergif
 ${no++} ➳ ${prefix}swm
 ${no++} ➳ ${prefix}stikerwm
 ${no++} ➳ ${prefix}stickerwm
 ${no++} ➳ ${prefix}smeme
 ${no++} ➳ ${prefix}memestiker
 ${no++} ➳ ${prefix}stikermeme
 ${no++} ➳ ${prefix}stickermeme
 ${no++} ➳ ${prefix}takesticker
 ${no++} ➳ ${prefix}emojinua2
 ${no++} ➳ ${prefix}mixemoji2
 ${no++} ➳ ${prefix}emojmix2
 ${no++} ➳ ${prefix}emojimix2
 

 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}buatroom 628xxx
 ${no++} ➳ ${prefix}room <only owner>
 ${no++} ➳ ${prefix}stopchat <only room>
 ${no++} ➳ ${prefix}menfess 628xx|bot|hai
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment LinkAja*
Number: 0895371549895
A/N: Eri Prabowo Mukti

*Payment Dana*
Number: 0895371549895
A/N: Tri Prabowo Mukti

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Tri Prabowo Mukti
 • *Umur:* 26 tahun
 • *Hoby:* Ngoding
 • *Askot:* Boyolali
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 62895371549895
 • *Youtube:* Rias Gremory
 • *Github:* BerkahEsport
 `
}

exports.cerpen = (prefix) => {
    return `𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 
    ✔️ ➳ ${prefix}cerpen-sejarah
    ✔️ ➳ ${prefix}cerpen-sedih
    ✔️ ➳ ${prefix}cerpen-sastra
    ✔️ ➳ ${prefix}cerpen-romantis
    ✔️ ➳ ${prefix}cerpen-rohani
    ✔️ ➳ ${prefix}cerpen-rindu
    ✔️ ➳ ${prefix}cerpen-remaja
    ✔️ ➳ ${prefix}cerpen-ramadhan
    ✔️ ➳ ${prefix}cerpen-petualangan
    ✔️ ➳ ${prefix}cerpen-persahabatan
    ✔️ ➳ ${prefix}cerpen-perpisahan
    ✔️ ➳ ${prefix}cerpen-perjuangan
    ✔️ ➳ ${prefix}cerpen-penyesalan
    ✔️ ➳ ${prefix}cerpen-pengorbanan
    ✔️ ➳ ${prefix}cerpen-pengalaman
    ✔️ ➳ ${prefix}cerpen-pendidikan
    ✔️ ➳ ${prefix}cerpen-penantian
    ✔️ ➳ ${prefix}cerpen-patahhati
    ✔️ ➳ ${prefix}cerpen-olahraga
    ✔️ ➳ ${prefix}cerpen-nasionalisme
    ✔️ ➳ ${prefix}cerpen-nasihat
    ✔️ ➳ ${prefix}cerpen-motivasi
    ✔️ ➳ ${prefix}cerpen-misteri
    ✔️ ➳ ${prefix}cerpen-mengharukan
    ✔️ ➳ ${prefix}cerpen-malaysia
    ✔️ ➳ ${prefix}cerpen-liburan
    ✔️ ➳ ${prefix}cerpen-kristen
    ✔️ ➳ ${prefix}cerpen-korea
    ✔️ ➳ ${prefix}cerpen-kisahnyata
    ✔️ ➳ ${prefix}cerpen-keluarga
    ✔️ ➳ ${prefix}cerpen-kehidupan
    ✔️ ➳ ${prefix}cerpen-jepang
    ✔️ ➳ ${prefix}cerpen-inspiratif
    ✔️ ➳ ${prefix}cerpen-gokil
    ✔️ ➳ ${prefix}cerpen-galau
    ✔️ ➳ ${prefix}cerpen-cintasejati
    ✔️ ➳ ${prefix}cerpen-cintasegitiga
    ✔️ ➳ ${prefix}cerpen-cintasedih
    ✔️ ➳ ${prefix}cerpen-cintaromantis
    ✔️ ➳ ${prefix}cerpen-cintapertama
    ✔️ ➳ ${prefix}cerpen-cintaislami
    ✔️ ➳ ${prefix}cerpen-cinta
    ✔️ ➳ ${prefix}cerpen-budaya
    ✔️ ➳ ${prefix}cerpen-bahasasunda
    ✔️ ➳ ${prefix}cerpen-bahasajawa
    ✔️ ➳ ${prefix}cerpen-bahasainggris
    ✔️ ➳ ${prefix}cerpen-bahasadaerah
    ✔️ ➳ ${prefix}cerpen-anak`
}
