
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━❲ 𝙂𝙐𝙍𝘽𝙊𝙏-𝙈𝘿 ━━━

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
 Total Fitur : ${no.length}

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

 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 
 ${no++} ➳ ${prefix}pricelist <layanan>
 ${no++} ➳ ${prefix}order <cara order>
 ${no++} ➳ ${prefix}like jumlah|target
 ${no++} ➳ ${prefix}view jumlah|target
 ${no++} ➳ ${prefix}follow jumlah|username
 ${no++} ➳ ${prefix}cekstatus <idtrx>
 ${no++} ➳ ${prefix}komisi <owner only>
 ${no++} ➳ ${prefix}tarikkomisi <owner only>
 
 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cecan
 ${no++} ➳ ${prefix}cogan
 ${no++} ➳ ${prefix}mobil
 ${no++} ➳ ${prefix}islamic
 ${no++} ➳ ${prefix}darkjokes
 ${no++} ➳ ${prefix}boneka
 ${no++} ➳ ${prefix}wallhp
 ${no++} ➳ ${prefix}tatasurya
 ${no++} ➳ ${prefix}programing

 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 
 ${no++} ➳ ${prefix}fat
 ${no++} ➳ ${prefix}fast
 ${no++} ➳ ${prefix}slow
 ${no++} ➳ ${prefix}bass
 ${no++} ➳ ${prefix}deep
 ${no++} ➳ ${prefix}tupai
 ${no++} ➳ ${prefix}robot
 ${no++} ➳ ${prefix}blown
 ${no++} ➳ ${prefix}smooth
 ${no++} ➳ ${prefix}earrape
 ${no++} ➳ ${prefix}reverse
 ${no++} ➳ ${prefix}nightcore

 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}gempa
 ${no++} ➳ ${prefix}jadwaltv
 ${no++} ➳ ${prefix}gempanow
 ${no++} ➳ ${prefix}bioskopnow
 ${no++} ➳ ${prefix}latintoaksara
 ${no++} ➳ ${prefix}aksaratolatin

 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}wallpaperislami
 ${no++} ➳ ${prefix}wallpaperinori
 ${no++} ➳ ${prefix}wallpaperanime
 ${no++} ➳ ${prefix}wallpapergamer
 ${no++} ➳ ${prefix}wallpapermeme
 ${no++} ➳ ${prefix}wallpaperprogamer
 ${no++} ➳ ${prefix}wallpaperteknologi
 ${no++} ➳ ${prefix}wallpapercyber

 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cerpen-sejarah
 ${no++} ➳ ${prefix}cerpen-sedih
 ${no++} ➳ ${prefix}cerpen-sastra
 ${no++} ➳ ${prefix}cerpen-romantis
 ${no++} ➳ ${prefix}cerpen-rohani
 ${no++} ➳ ${prefix}cerpen-rindu
 ${no++} ➳ ${prefix}cerpen-remaja
 ${no++} ➳ ${prefix}cerpen-ramadhan
 ${no++} ➳ ${prefix}cerpen-petualangan
 ${no++} ➳ ${prefix}cerpen-persahabatan
 ${no++} ➳ ${prefix}cerpen-perpisahan
 ${no++} ➳ ${prefix}cerpen-perjuangan
 ${no++} ➳ ${prefix}cerpen-penyesalan
 ${no++} ➳ ${prefix}cerpen-pengorbanan
 ${no++} ➳ ${prefix}cerpen-pengalaman
 ${no++} ➳ ${prefix}cerpen-pendidikan
 ${no++} ➳ ${prefix}cerpen-penantian
 ${no++} ➳ ${prefix}cerpen-patahhati
 ${no++} ➳ ${prefix}cerpen-olahraga
 ${no++} ➳ ${prefix}cerpen-nasionalisme
 ${no++} ➳ ${prefix}cerpen-nasihat
 ${no++} ➳ ${prefix}cerpen-motivasi
 ${no++} ➳ ${prefix}cerpen-misteri
 ${no++} ➳ ${prefix}cerpen-mengharukan
 ${no++} ➳ ${prefix}cerpen-malaysia
 ${no++} ➳ ${prefix}cerpen-liburan
 ${no++} ➳ ${prefix}cerpen-kristen
 ${no++} ➳ ${prefix}cerpen-korea
 ${no++} ➳ ${prefix}cerpen-kisahnyata
 ${no++} ➳ ${prefix}cerpen-keluarga
 ${no++} ➳ ${prefix}cerpen-kehidupan
 ${no++} ➳ ${prefix}cerpen-jepang
 ${no++} ➳ ${prefix}cerpen-inspiratif
 ${no++} ➳ ${prefix}cerpen-gokil
 ${no++} ➳ ${prefix}cerpen-galau
 ${no++} ➳ ${prefix}cerpen-cintasejati
 ${no++} ➳ ${prefix}cerpen-cintasegitiga
 ${no++} ➳ ${prefix}cerpen-cintasedih
 ${no++} ➳ ${prefix}cerpen-cintaromantis
 ${no++} ➳ ${prefix}cerpen-cintapertama
 ${no++} ➳ ${prefix}cerpen-cintaislami
 ${no++} ➳ ${prefix}cerpen-cinta
 ${no++} ➳ ${prefix}cerpen-budaya
 ${no++} ➳ ${prefix}cerpen-bahasasunda
 ${no++} ➳ ${prefix}cerpen-bahasajawa
 ${no++} ➳ ${prefix}cerpen-bahasainggris
 ${no++} ➳ ${prefix}cerpen-bahasadaerah
 ${no++} ➳ ${prefix}cerpen-anak

 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}metallic text
 ${no++} ➳ ${prefix}naruto text
 ${no++} ➳ ${prefix}butterfly text
 ${no++} ➳ ${prefix}flaming text
 ${no++} ➳ ${prefix}shadow text
 ${no++} ➳ ${prefix}cup text
 ${no++} ➳ ${prefix}cup1 text
 ${no++} ➳ ${prefix}romance text
 ${no++} ➳ ${prefix}smoke text
 ${no++} ➳ ${prefix}burnpaper text
 ${no++} ➳ ${prefix}lovemessage text
 ${no++} ➳ ${prefix}undergrass text
 ${no++} ➳ ${prefix}love text
 ${no++} ➳ ${prefix}coffe text
 ${no++} ➳ ${prefix}woodheart text
 ${no++} ➳ ${prefix}woodenboard text
 ${no++} ➳ ${prefix}summer3d text
 ${no++} ➳ ${prefix}wolfmetal text
 ${no++} ➳ ${prefix}nature3d text
 ${no++} ➳ ${prefix}underwater text
 ${no++} ➳ ${prefix}goldenrose text
 ${no++} ➳ ${prefix}summernature text
 ${no++} ➳ ${prefix}letterleaves text
 ${no++} ➳ ${prefix}glowingneon text
 ${no++} ➳ ${prefix}fallleaves text
 ${no++} ➳ ${prefix}flamming text
 ${no++} ➳ ${prefix}harrypotter text
 ${no++} ➳ ${prefix}carvedwood text
 ${no++} ➳ ${prefix}tiktok text1 text2
 ${no++} ➳ ${prefix}arcade8bit text1 text2
 ${no++} ➳ ${prefix}battlefield4 text1 text2
 ${no++} ➳ ${prefix}pubg text1 text2

 𝙀𝙋𝙃𝙊𝙏𝙊 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}wetglass text
 ${no++} ➳ ${prefix}multicolor3d text
 ${no++} ➳ ${prefix}watercolor text
 ${no++} ➳ ${prefix}luxurygold text
 ${no++} ➳ ${prefix}galaxywallpaper text
 ${no++} ➳ ${prefix}lighttext text
 ${no++} ➳ ${prefix}beautifulflower text
 ${no++} ➳ ${prefix}puppycute text
 ${no++} ➳ ${prefix}royaltext text
 ${no++} ➳ ${prefix}heartshaped text
 ${no++} ➳ ${prefix}birthdaycake text
 ${no++} ➳ ${prefix}galaxystyle text
 ${no++} ➳ ${prefix}hologram3d text
 ${no++} ➳ ${prefix}greenneon text
 ${no++} ➳ ${prefix}glossychrome text
 ${no++} ➳ ${prefix}greenbush text
 ${no++} ➳ ${prefix}metallogo text
 ${no++} ➳ ${prefix}noeltext text
 ${no++} ➳ ${prefix}glittergold text
 ${no++} ➳ ${prefix}textcake text
 ${no++} ➳ ${prefix}starsnight text
 ${no++} ➳ ${prefix}wooden3d text
 ${no++} ➳ ${prefix}textbyname text
 ${no++} ➳ ${prefix}writegalacy text
 ${no++} ➳ ${prefix}galaxybat text
 ${no++} ➳ ${prefix}snow3d text
 ${no++} ➳ ${prefix}birthdayday text
 ${no++} ➳ ${prefix}goldplaybutton text
 ${no++} ➳ ${prefix}silverplaybutton text
 ${no++} ➳ ${prefix}freefire text
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
 • *Github:* Lexxy24
 `
}