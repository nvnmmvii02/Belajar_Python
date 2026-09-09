export interface Flashcard {
  question: string;
  answer: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  icon: string;
  summary: string;
  content: string[];
  codeExamples: { title: string; code: string; explanation: string }[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Pengenalan Python",
    icon: "🐍",
    summary: "Python adalah bahasa pemrograman yang mudah dibaca dan serbaguna. Bayangkan Python seperti bahasa sehari-hari yang dimengerti komputer — sederhana, jelas, dan powerful!",
    content: [
      "🌟 **Apa itu Python?**\n\nBayangkan kamu punya robot super pintar yang bisa melakukan apapun, tapi dia hanya mengerti bahasa tertentu. Python adalah salah satu 'bahasa' yang bisa dimengerti robot (komputer) tersebut.\n\nPython dibuat oleh Guido van Rossum pada tahun 1991. Nama 'Python' bukan dari ular, tapi dari acara komedi Inggris 'Monty Python's Flying Circus'!",
      "🎯 **Kenapa Belajar Python?**\n\n• **Mudah dibaca** — Sintaksnya seperti bahasa Inggris sederhana\n• **Serbaguna** — Bisa untuk web, AI, game, data science, dll\n• **Komunitas besar** — Jutaan programmer di seluruh dunia\n• **Banyak library** — Seperti 'toolbox' yang sudah siap pakai\n• **Demand tinggi** — Banyak dicari di dunia kerja",
      "🔧 **Cara Kerja Python**\n\nBayangkan kamu menulis surat (kode) dalam bahasa Python. Surat ini lalu diterjemahkan oleh 'penerjemah' (Python Interpreter) menjadi instruksi yang dimengerti komputer.\n\nProsesnya: Kamu tulis kode → Python Interpreter menerjemahkan → Komputer menjalankan",
      "💻 **Menjalankan Python**\n\nAda beberapa cara menjalankan Python:\n1. **Interactive Mode** — Seperti ngobrol langsung dengan komputer\n2. **Script Mode** — Menulis semua instruksi di file, lalu dijalankan sekaligus\n3. **IDE** — Menggunakan aplikasi khusus seperti VS Code, PyCharm"
    ],
    codeExamples: [
      {
        title: "Program Python Pertamamu!",
        code: "# Ini adalah komentar - tidak dijalankan oleh Python\n# Komentar seperti catatan tempel untuk diri sendiri\n\nprint(\"Halo, Dunia! 🌍\")\nprint(\"Selamat datang di Python!\")\n\n# print() adalah perintah untuk menampilkan teks\n# Teks harus diapit tanda kutip \"\" atau ''",
        explanation: "print() adalah fungsi bawaan Python untuk menampilkan sesuatu ke layar. Anggap seperti 'mengumumkan' sesuatu lewat pengeras suara."
      },
      {
        title: "Python sebagai Kalkulator",
        code: "# Python bisa langsung dipakai menghitung!\nprint(2 + 3)      # Penjumlahan: 5\nprint(10 - 4)     # Pengurangan: 6\nprint(3 * 7)      # Perkalian: 21\nprint(15 / 3)     # Pembagian: 5.0\nprint(2 ** 10)    # Pangkat: 1024\nprint(17 % 5)     # Sisa bagi (modulo): 2",
        explanation: "Python bisa langsung jadi kalkulator! Operator: + (tambah), - (kurang), * (kali), / (bagi), ** (pangkat), % (sisa bagi)."
      }
    ],
    flashcards: [
      { question: "Siapa pembuat Python?", answer: "Guido van Rossum, dirilis tahun 1991" },
      { question: "Apa fungsi print()?", answer: "Menampilkan teks/hasil ke layar (output)" },
      { question: "Apa itu Python Interpreter?", answer: "Program yang menerjemahkan kode Python menjadi instruksi yang dimengerti komputer" },
      { question: "Operator ** dalam Python artinya?", answer: "Pangkat (exponentiation). Contoh: 2**3 = 8" },
      { question: "Operator % dalam Python artinya?", answer: "Modulo - menghasilkan sisa pembagian. Contoh: 7%3 = 1" }
    ],
    quiz: [
      {
        question: "Apa output dari: print(2 ** 3)?",
        options: ["6", "8", "5", "9"],
        correctIndex: 1,
        explanation: "2 ** 3 artinya 2 pangkat 3 = 2 x 2 x 2 = 8"
      },
      {
        question: "Manakah yang BUKAN alasan populer Python?",
        options: ["Mudah dibaca", "Hanya bisa untuk web", "Komunitas besar", "Banyak library"],
        correctIndex: 1,
        explanation: "Python serbaguna - bisa untuk web, AI, data science, game, dan banyak lagi!"
      },
      {
        question: "Apa output dari: print(17 % 5)?",
        options: ["3", "2", "3.4", "5"],
        correctIndex: 1,
        explanation: "17 / 5 = 3 sisa 2. Operator % menghasilkan sisa pembagian, yaitu 2."
      }
    ]
  },
  {
    id: 2,
    title: "Variabel & Tipe Data",
    icon: "📦",
    summary: "Variabel adalah 'wadah' untuk menyimpan data. Tipe data menentukan jenis isi wadah tersebut — seperti membedakan antara kotak untuk buku, makanan, atau pakaian.",
    content: [
      "📦 **Apa itu Variabel?**\n\nBayangkan variabel seperti kotak berlabel. Kamu bisa menyimpan sesuatu di dalamnya dan memanggilnya dengan nama label.\n\nContoh: nama = 'Budi' — Ini seperti memberi label 'nama' pada kotak, lalu mengisi kotak itu dengan 'Budi'.\n\nAturan penamaan variabel:\n• Harus dimulai dengan huruf atau underscore (_)\n• Tidak boleh ada spasi\n• Case-sensitive (nama ≠ Nama)\n• Gunakan nama yang bermakna!",
      "🔢 **Tipe Data Dasar**\n\nBayangkan tipe data seperti jenis wadah:\n\n• **int** (integer) — Bilangan bulat: 42, -7, 0\n• **float** — Bilangan desimal: 3.14, -0.5\n• **str** (string) — Teks: 'Halo', 'Python'\n• **bool** (boolean) — Benar/Salah: True, False\n\nAnalogi: int = apel utuh, float = apel yang sudah dipotong (ada bagian desimal), str = label/stiker, bool = saklar lampu (on/off)",
      "🔄 **Konversi Tipe Data (Casting)**\n\nKadang kamu perlu mengubah 'isi kotak' ke jenis lain:\n\n• int('5') → mengubah teks '5' jadi angka 5\n• str(42) → mengubah angka 42 jadi teks '42'\n• float('3.14') → mengubah teks jadi desimal\n• bool(0) → False, bool(1) → True\n\nAnalogi: Seperti mengubah format file — foto JPG ke PNG, isinya sama tapi formatnya beda.",
      "📝 **Multiple Assignment**\n\nPython memungkinkan assign banyak variabel sekaligus:\n\n• x, y, z = 1, 2, 3 — Isi 3 kotak sekaligus\n• a = b = c = 0 — 3 kotak, isi sama\n\nIni seperti membuka 3 paket sekaligus atau memberi hadiah yang sama ke 3 orang."
    ],
    codeExamples: [
      {
        title: "Membuat dan Menggunakan Variabel",
        code: "# Membuat variabel (membuat kotak berlabel)\nnama = \"Andi\"\numur = 20\ntinggi = 170.5\nmahasiswa = True\n\n# Menampilkan variabel\nprint(nama)        # Output: Andi\nprint(type(nama))  # Output: <class 'str'>\nprint(type(umur))  # Output: <class 'int'>\nprint(type(tinggi)) # Output: <class 'float'>\nprint(type(mahasiswa)) # Output: <class 'bool'>",
        explanation: "Setiap variabel punya tipe data yang ditentukan otomatis oleh Python. type() digunakan untuk mengecek tipe data suatu variabel."
      },
      {
        title: "Konversi Tipe Data",
        code: "# Casting - mengubah tipe data\nangka_str = \"25\"       # Ini string (teks)\nangka_int = int(angka_str)  # Sekarang jadi integer 25\nangka_float = float(angka_str)  # Jadi float 25.0\n\nprint(angka_int + 5)    # 30 (bisa dihitung!)\nprint(str(100) + \" rupiah\")  # \"100 rupiah\"\n\n# Cek tipe\nprint(type(angka_int))   # <class 'int'>\nprint(type(angka_float)) # <class 'float'>",
        explanation: "Casting penting saat kamu mendapat data dalam bentuk yang tidak sesuai. Misalnya input dari user selalu berupa string, tapi kamu butuh angka untuk menghitung."
      },
      {
        title: "String Formatting",
        code: "# Cara modern menampilkan variabel dalam teks\nnama = \"Budi\"\numur = 25\n\n# f-string (paling direkomendasikan)\nprint(f\"Halo, nama saya {nama} dan umur saya {umur}\")\n\n# .format()\nprint(\"Halo, nama saya {} dan umur saya {}\".format(nama, umur))\n\n# Concatenation (+)\nprint(\"Halo, nama saya \" + nama + \" dan umur saya \" + str(umur))",
        explanation: "f-string adalah cara paling mudah dan modern. Cukup tulis f sebelum tanda kutip, lalu masukkan variabel dalam kurung kurawal {}."
      }
    ],
    flashcards: [
      { question: "Apa 4 tipe data dasar di Python?", answer: "int (bilangan bulat), float (desimal), str (teks/string), bool (True/False)" },
      { question: "Apa itu casting?", answer: "Proses mengubah tipe data satu ke tipe data lain. Contoh: int('5') mengubah string '5' jadi integer 5" },
      { question: "Bolehkah variabel bernama '2nama'?", answer: "TIDAK! Variabel harus dimulai dengan huruf atau underscore (_), tidak boleh angka." },
      { question: "Apa output type(3.14)?", answer: "<class 'float'> — karena 3.14 adalah bilangan desimal" },
      { question: "Apa perbedaan nama dan Nama di Python?", answer: "Python case-sensitive! 'nama' dan 'Nama' adalah dua variabel yang berbeda." }
    ],
    quiz: [
      {
        question: "Apa tipe data dari: x = 3.14?",
        options: ["int", "str", "float", "bool"],
        correctIndex: 2,
        explanation: "3.14 memiliki titik desimal, sehingga tipe datanya adalah float (bilangan desimal)."
      },
      {
        question: "Apa output dari: print(type(True))?",
        options: ["<class 'str'>", "<class 'int'>", "<class 'bool'>", "<class 'true'>"],
        correctIndex: 2,
        explanation: "True adalah nilai boolean, sehingga tipe datanya adalah bool."
      },
      {
        question: "Manakah nama variabel yang VALID?",
        options: ["2x", "my-var", "_nilai", "class"],
        correctIndex: 2,
        explanation: "_nilai valid karena dimulai dengan underscore. 2x salah (dimulai angka), my-var salah (ada tanda -), class salah (kata reserved)."
      },
      {
        question: "Apa hasil dari: int('42') + 8?",
        options: ["428", "50", "Error", "428"],
        correctIndex: 1,
        explanation: "int('42') mengubah string '42' menjadi integer 42, lalu 42 + 8 = 50."
      }
    ]
  },
  {
    id: 3,
    title: "Operator",
    icon: "⚡",
    summary: "Operator adalah 'alat' untuk melakukan operasi pada data. Seperti kalkulator, tapi lebih powerful — bisa membandingkan, mengecek logika, dan memanipulasi data.",
    content: [
      "➕ **Operator Aritmatika**\n\nIni seperti kalkulator, tapi lebih lengkap:\n\n• + Penjumlahan\n• - Pengurangan\n• * Perkalian\n• / Pembagian (hasil selalu float)\n• // Pembagian bulat (floor division)\n• % Modulo (sisa bagi)\n• ** Pangkat\n\nAnalogi: Bayangkan kamu bagi 10 permen ke 3 orang. 10//3 = 3 (tiap orang dapat 3), 10%3 = 1 (sisa 1 permen).",
      "⚖️ **Operator Perbandingan**\n\nDigunakan untuk membandingkan dua nilai. Hasilnya selalu True atau False:\n\n• == Sama dengan (hati-hati: bukan =)\n• != Tidak sama dengan\n• > Lebih besar\n• < Lebih kecil\n• >= Lebih besar atau sama dengan\n• <= Lebih kecil atau sama dengan\n\nAnalogi: Seperti wasit yang memutuskan apakah pemain A lebih tinggi dari pemain B — jawabannya ya (True) atau tidak (False).",
      "🧠 **Operator Logika**\n\nDigunakan untuk menggabungkan kondisi:\n\n• and — Kedua kondisi harus True\n• or — Salah satu kondisi True sudah cukup\n• not — Membalikkan nilai (True jadi False)\n\nAnalogi:\n- AND: 'Kalau hujan DAN dingin, aku bawa jaket' (dua-duanya harus terjadi)\n- OR: 'Kalau hujan ATAU dingin, aku bawa jaket' (salah satu cukup)\n- NOT: 'NOT hujan' = tidak hujan",
      "🎯 **Operator Assignment**\n\nCara singkat untuk melakukan operasi dan assign:\n\n• x += 5 sama dengan x = x + 5\n• x -= 3 sama dengan x = x - 3\n• x *= 2 sama dengan x = x * 2\n• x /= 4 sama dengan x = x / 4\n\nAnalogi: Seperti shortcut di keyboard. Daripada ngetik panjang, cukup pakai jalan pintas!"
    ],
    codeExamples: [
      {
        title: "Operator Aritmatika dalam Aksi",
        code: "# Operator Aritmatika\na = 15\nb = 4\n\nprint(f\"{a} + {b} = {a + b}\")    # 19\nprint(f\"{a} - {b} = {a - b}\")    # 11\nprint(f\"{a} * {b} = {a * b}\")    # 60\nprint(f\"{a} / {b} = {a / b}\")    # 3.75\nprint(f\"{a} // {b} = {a // b}\")  # 3 (pembagian bulat)\nprint(f\"{a} % {b} = {a % b}\")    # 3 (sisa bagi)\nprint(f\"{a} ** {b} = {a ** b}\")  # 50625 (15 pangkat 4)",
        explanation: "Perhatikan perbedaan / (pembagian biasa, hasil float) dengan // (pembagian bulat, hasil int). Modulo % sangat berguna untuk mengecek ganjil/genap!"
      },
      {
        title: "Operator Perbandingan & Logika",
        code: "# Perbandingan\numur = 20\nprint(umur >= 17)     # True (20 lebih besar dari 17)\nprint(umur == 18)     # False (20 tidak sama dengan 18)\n\n# Logika\npunya_ktp = True\n\n# AND - keduanya harus True\nprint(umur >= 17 and punya_ktp)  # True\n\n# OR - salah satu True cukup\nprint(umur < 10 or punya_ktp)    # True\n\n# NOT - membalikkan\nprint(not punya_ktp)  # False",
        explanation: "Operator logika sangat penting untuk membuat keputusan dalam program. Gabungkan dengan if/else untuk kontrol alur program."
      }
    ],
    flashcards: [
      { question: "Apa perbedaan = dan ==?", answer: "= untuk assign nilai ke variabel. == untuk membandingkan dua nilai (menghasilkan True/False)" },
      { question: "Apa hasil 17 // 5?", answer: "3 — Floor division membagi lalu membulatkan ke bawah. 17/5 = 3.4, dibulatkan ke bawah = 3" },
      { question: "Apa hasil 17 % 5?", answer: "2 — Modulo menghasilkan sisa pembagian. 17/5 = 3 sisa 2" },
      { question: "Kapan 'and' menghasilkan True?", answer: "Hanya ketika KEDUA kondisi True. Jika salah satu False, hasilnya False." },
      { question: "Apa hasil dari: not True?", answer: "False — Operator not membalikkan nilai boolean." }
    ],
    quiz: [
      {
        question: "Apa hasil dari: 10 % 3?",
        options: ["3", "1", "3.33", "0"],
        correctIndex: 1,
        explanation: "10 / 3 = 3 sisa 1. Operator % menghasilkan sisa pembagian = 1."
      },
      {
        question: "Apa hasil dari: True and False?",
        options: ["True", "False", "None", "Error"],
        correctIndex: 1,
        explanation: "AND membutuhkan keduanya True. Karena ada False, hasilnya False."
      },
      {
        question: "Apa hasil dari: 7 // 2?",
        options: ["3.5", "3", "4", "3.0"],
        correctIndex: 1,
        explanation: "// adalah floor division. 7/2 = 3.5, dibulatkan ke bawah = 3 (tipe int)."
      },
      {
        question: "Manakah yang menghasilkan True?",
        options: ["5 == '5'", "5 != 5", "10 >= 10", "3 > 3"],
        correctIndex: 2,
        explanation: "10 >= 10 artinya 10 lebih besar atau SAMA DENGAN 10. Karena sama, hasilnya True."
      }
    ]
  },
  {
    id: 4,
    title: "Struktur Kontrol",
    icon: "🔀",
    summary: "Struktur kontrol mengatur alur program — seperti persimpangan jalan yang menentukan arah. Ada percabangan (if/else) dan perulangan (for/while).",
    content: [
      "🔀 **Percabangan (if/elif/else)**\n\nBayangkan kamu di persimpangan jalan:\n• **if** — 'Kalau hujan, bawa payung'\n• **elif** — 'Kalau mendung, bawa jas hujan'\n• **else** — 'Kalau cerah, pakai kacamata hitam'\n\nProgram akan mengecek kondisi dari atas ke bawah. Yang pertama True, itu yang dijalankan!",
      "🔄 **Perulangan for**\n\nFor loop seperti instruksi: 'Lakukan ini untuk SETIAP item dalam kumpulan'\n\nAnalogi: Bayangkan kamu punya 10 kado. For loop seperti membuka setiap kado satu per satu dan melakukan hal yang sama untuk masing-masing.\n\nfor item in kumpulan: — 'Untuk setiap item dalam kumpulan, lakukan...'",
      "🔁 **Perulangan while**\n\nWhile loop seperti: 'Terus lakukan SELAGI kondisi masih True'\n\nAnalogi: 'Terus makan SELAGI masih lapar.' Ketika sudah kenyang (False), berhenti makan.\n\n⚠️ Hati-hati infinite loop! Pastikan kondisi akan berubah jadi False.",
      "⚡ **break, continue, pass**\n\n• **break** — 'STOP! Keluar dari perulangan sekarang!' (seperti tombol emergency)\n• **continue** — 'Skip yang ini, lanjut ke berikutnya' (seperti skip iklan)\n• **pass** — 'Nanti diisi, kosongkan dulu' (placeholder, seperti TODO)"
    ],
    codeExamples: [
      {
        title: "Percabangan if/elif/else",
        code: "# Sistem nilai otomatis\nnilai = 85\n\nif nilai >= 90:\n    grade = \"A\"\n    print(\"Luar biasa! 🌟\")\nelif nilai >= 80:\n    grade = \"B\"\n    print(\"Bagus sekali! 👏\")\nelif nilai >= 70:\n    grade = \"C\"\n    print(\"Cukup baik 👍\")\nelif nilai >= 60:\n    grade = \"D\"\n    print(\"Perlu belajar lagi 📚\")\nelse:\n    grade = \"E\"\n    print(\"Jangan menyerah! 💪\")\n\nprint(f\"Nilai kamu: {grade}\")",
        explanation: "Program mengecek dari atas. Begitu menemukan kondisi True, jalankan blok itu dan SKIP sisanya. Jadi hanya satu blok yang dijalankan."
      },
      {
        title: "For Loop dengan range()",
        code: "# range(stop) - dari 0 sampai stop-1\nfor i in range(5):\n    print(f\"Iterasi ke-{i}\")\n\n# range(start, stop, step)\nprint(\"\\nHitung mundur:\")\nfor i in range(5, 0, -1):\n    print(f\"{i}...\")\nprint(\"GO! 🚀\")\n\n# Loop melalui list\nbuah = [\"🍎 Apel\", \"🍌 Pisang\", \"🍊 Jeruk\"]\nfor b in buah:\n    print(f\"Saya suka {b}\")",
        explanation: "range() menghasilkan urutan angka. range(5) = 0,1,2,3,4. range(1,6) = 1,2,3,4,5. range(0,10,2) = 0,2,4,6,8 (loncat 2)."
      },
      {
        title: "While Loop & Break/Continue",
        code: "# Continue - skip angka genap\nprint(\"Angka ganjil:\")\nfor i in range(1, 11):\n    if i % 2 == 0:\n        continue  # skip ke iterasi berikutnya\n    print(i, end=\" \")  # 1 3 5 7 9\n\n# Break - berhenti saat ketemu\nprint(\"\\n\\nCari angka pertama > 50:\")\nfor i in range(1, 100):\n    if i > 50:\n        print(f\"Ketemu: {i}\")\n        break  # keluar dari loop",
        explanation: "While loop terus berjalan SELAGI kondisinya True. break untuk keluar paksa, continue untuk skip ke iterasi berikutnya."
      }
    ],
    flashcards: [
      { question: "Apa fungsi elif?", answer: "Singkatan dari 'else if' — kondisi tambahan yang dicek jika if sebelumnya False" },
      { question: "Apa hasil range(3)?", answer: "Menghasilkan urutan: 0, 1, 2 (dari 0 sampai 3-1)" },
      { question: "Apa perbedaan break dan continue?", answer: "break = keluar total dari loop. continue = skip iterasi saat ini, lanjut ke berikutnya." },
      { question: "Kapan while loop berhenti?", answer: "Ketika kondisinya menjadi False. Jika tidak pernah False, terjadi infinite loop!" },
      { question: "Apa fungsi pass?", answer: "Placeholder kosong — tidak melakukan apapun. Digunakan saat sintaks butuh blok kode tapi kita belum ingin menulis isinya." }
    ],
    quiz: [
      {
        question: "Apa output dari: for i in range(3): print(i)",
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        correctIndex: 1,
        explanation: "range(3) menghasilkan 0, 1, 2. Dimulai dari 0 dan berhenti SEBELUM 3."
      },
      {
        question: "Apa yang dilakukan 'break' dalam loop?",
        options: ["Skip satu iterasi", "Keluar dari loop sepenuhnya", "Pause loop", "Restart loop"],
        correctIndex: 1,
        explanation: "break langsung keluar dari loop sepenuhnya, tidak melanjutkan iterasi lagi."
      },
      {
        question: "Berapa kali loop ini berjalan?\nwhile True: break",
        options: ["Infinite", "1 kali", "0 kali", "2 kali"],
        correctIndex: 1,
        explanation: "Loop mulai (True), langsung bertemu break, keluar. Jadi hanya 1 kali iterasi."
      }
    ]
  },
  {
    id: 5,
    title: "Fungsi",
    icon: "🔧",
    summary: "Fungsi adalah 'mesin' yang bisa kamu buat sendiri — masukkan bahan (input), mesin bekerja, lalu keluar hasil (output). Tulis sekali, pakai berkali-kali!",
    content: [
      "🔧 **Apa itu Fungsi?**\n\nBayangkan fungsi seperti resep masakan:\n• **Nama fungsi** = Nama resep ('Nasi Goreng')\n• **Parameter** = Bahan-bahan (nasi, bumbu, telur)\n• **Proses** = Langkah-langkah memasak\n• **Return** = Hasil akhir (nasi goreng siap saji)\n\nKeuntungan: Tulis resep sekali, bisa masak berkali-kali tanpa mengingat semua langkah!",
      "📥 **Parameter & Argumen**\n\n• **Parameter** — Variabel di definisi fungsi (seperti 'slot' di mesin)\n• **Argumen** — Nilai aktual yang dimasukkan saat memanggil fungsi\n\nJenis parameter:\n• **Positional** — Urutan penting: fungsi(a, b)\n• **Default** — Punya nilai bawaan: def fungsi(a, b=10)\n• **Keyword** — Disebut dengan nama: fungsi(b=5, a=3)\n• ***args** — Terima banyak argumen: def fungsi(*args)\n• ****kwargs** — Terima banyak keyword: def fungsi(**kwargs)",
      "📤 **Return Value**\n\nReturn seperti 'mengirim hasil kerja' kembali ke pemanggil:\n\n• return tanpa nilai → mengembalikan None\n• return x → mengembalikan nilai x\n• return x, y → mengembalikan tuple (x, y)\n\n⚠️ Setelah return, fungsi BERHENTI. Kode setelah return tidak dijalankan!\n\nAnalogi: Return seperti kasir yang memberikan struk belanja. Setelah struk diberikan, transaksi selesai.",
      "🌍 **Scope (Ruang Lingkup)**\n\n• **Local scope** — Variabel dalam fungsi (hanya dikenal di dalam)\n• **Global scope** — Variabel di luar fungsi (dikenal di mana saja)\n\nAnalogi: Local = barang di dalam kamar (hanya kamu yang bisa pakai). Global = barang di ruang tamu (semua orang bisa pakai)."
    ],
    codeExamples: [
      {
        title: "Membuat dan Memanggil Fungsi",
        code: "# Fungsi sederhana\ndef sapa(nama):\n    \"\"\"Fungsi untuk menyapa seseorang\"\"\"\n    return f\"Halo, {nama}! Selamat belajar Python! 🐍\"\n\n# Memanggil fungsi\npesan = sapa(\"Andi\")\nprint(pesan)\n\n# Fungsi dengan parameter default\ndef hitung_luas(panjang, lebar=5):\n    \"\"\"Hitung luas persegi panjang\"\"\"\n    return panjang * lebar\n\nprint(hitung_luas(10))     # 50 (lebar default=5)\nprint(hitung_luas(10, 3))  # 30 (lebar=3)",
        explanation: "def digunakan untuk mendefinisikan fungsi. Parameter default membuat argumen opsional. Docstring (triple quote) menjelaskan fungsi."
      },
      {
        title: "*args dan **kwargs",
        code: "# *args - terima banyak argumen positional\ndef jumlahkan(*angka):\n    \"\"\"Jumlahkan semua angka yang diberikan\"\"\"\n    total = sum(angka)\n    print(f\"Angka: {angka}\")\n    return total\n\nprint(jumlahkan(1, 2, 3))       # 6\nprint(jumlahkan(10, 20, 30, 40)) # 100\n\n# **kwargs - terima banyak keyword arguments\ndef profil(**data):\n    \"\"\"Tampilkan profil seseorang\"\"\"\n    for kunci, nilai in data.items():\n        print(f\"{kunci}: {nilai}\")\n\nprofil(nama=\"Budi\", umur=25, kota=\"Jakarta\")",
        explanation: "*args mengumpulkan semua argumen positional jadi tuple. **kwargs mengumpulkan semua keyword arguments jadi dictionary. Sangat fleksibel!"
      },
      {
        title: "Lambda Function",
        code: "# Lambda - fungsi anonim (tanpa nama)\n# Format: lambda parameter: ekspresi\n\nkuadrat = lambda x: x ** 2\nprint(kuadrat(5))  # 25\n\n# Lambda dengan multiple parameter\ntambah = lambda a, b: a + b\nprint(tambah(3, 4))  # 7\n\n# Berguna untuk sorting\ndata = [(\"Andi\", 85), (\"Budi\", 92), (\"Cici\", 78)]\ndata.sort(key=lambda x: x[1])  # Sort berdasarkan nilai\nprint(data)",
        explanation: "Lambda adalah fungsi mini satu baris. Berguna untuk operasi sederhana yang tidak perlu fungsi formal. Sering dipakai dengan map(), filter(), sort()."
      }
    ],
    flashcards: [
      { question: "Apa keyword untuk membuat fungsi?", answer: "def — contoh: def nama_fungsi(parameter): ..." },
      { question: "Apa perbedaan parameter dan argumen?", answer: "Parameter = variabel di definisi fungsi. Argumen = nilai aktual yang diberikan saat memanggil fungsi." },
      { question: "Apa yang terjadi setelah return dijalankan?", answer: "Fungsi langsung berhenti dan mengembalikan nilai. Kode setelah return tidak dijalankan." },
      { question: "Apa itu *args?", answer: "Memungkinkan fungsi menerima jumlah argumen positional yang tak terbatas, dikumpulkan dalam tuple." },
      { question: "Apa itu lambda function?", answer: "Fungsi anonim satu baris. Format: lambda parameter: ekspresi. Contoh: lambda x: x*2" }
    ],
    quiz: [
      {
        question: "Apa output dari:\ndef tambah(a, b=5):\n    return a + b\nprint(tambah(3))",
        options: ["3", "5", "8", "Error"],
        correctIndex: 2,
        explanation: "a=3, b menggunakan default value 5. Jadi 3 + 5 = 8."
      },
      {
        question: "Apa yang dikembalikan fungsi tanpa return?",
        options: ["0", "\"\"", "None", "Error"],
        correctIndex: 2,
        explanation: "Fungsi tanpa return (atau return tanpa nilai) secara otomatis mengembalikan None."
      },
      {
        question: "Manakah lambda yang BENAR?",
        options: ["lambda: x*2", "lambda x => x*2", "lambda x: x*2", "def lambda(x): x*2"],
        correctIndex: 2,
        explanation: "Format lambda yang benar: lambda parameter: ekspresi. Jadi lambda x: x*2."
      }
    ]
  },
  {
    id: 6,
    title: "Struktur Data",
    icon: "🗃️",
    summary: "Struktur data adalah cara Python menyimpan dan mengorganisir banyak data sekaligus. Bayangkan seperti berbagai jenis wadah: List=rantai, Tuple=kotak terkunci, Dictionary=kamus, Set=kantong ajaib.",
    content: [
      "📋 **List (Daftar)**\n\nList = kumpulan data berurutan yang BISA diubah. Seperti daftar belanja yang bisa kamu coret dan tambah.\n\n• Dibuat dengan kurung siku: [1, 2, 3]\n• Bisa campur tipe data: [1, 'halo', True]\n• Index mulai dari 0\n• Bisa diubah (mutable)\n• Bisa ada duplikat\n\nOperasi penting: append(), insert(), remove(), pop(), sort(), slice",
      "🔒 **Tuple**\n\nTuple = seperti List tapi TIDAK BISA diubah setelah dibuat. Seperti akta kelahiran — sudah dicetak, tidak bisa diubah.\n\n• Dibuat dengan kurung biasa: (1, 2, 3)\n• Lebih cepat dari List\n• Bisa dipakai sebagai key dictionary\n• Cocok untuk data yang tetap\n\nAnalogi: List = papan tulis (bisa dihapus/tulis), Tuple = batu terpahat (permanen).",
      "📖 **Dictionary (Dict)**\n\nDictionary = kumpulan data dengan format KEY:VALUE. Seperti kamus asli — cari kata (key), dapat arti (value).\n\n• Dibuat dengan kurung kurawal: {'nama': 'Budi', 'umur': 25}\n• Key harus unik dan immutable\n• Value bisa apa saja\n• Akses dengan: dict['key'] atau dict.get('key')\n\nAnalogi: Seperti kontak di HP — nama (key) → nomor telepon (value).",
      "🎲 **Set (Himpunan)**\n\nSet = kumpulan data UNIK tanpa urutan. Seperti kantong ajaib yang otomatis menolak duplikat.\n\n• Dibuat dengan kurung kurawal: {1, 2, 3}\n• Tidak ada duplikat\n• Tidak berindex\n• Mendukung operasi himpunan: union, intersection, difference\n\nAnalogi: Seperti kumpulan kartu Pokemon — tidak mungkin punya 2 kartu Pikachu yang sama persis dalam satu set.",
      "🔄 **Konversi Antar Struktur Data**\n\n• list(set_data) → Set ke List\n• tuple(list_data) → List ke Tuple\n• set(list_data) → List ke Set (hilangkan duplikat!)\n• dict() → membuat dictionary baru\n\nTips: Gunakan set() untuk menghilangkan duplikat dari list!"
    ],
    codeExamples: [
      {
        title: "List - Si Fleksibel",
        code: "# Membuat list\nbuah = [\"🍎 Apel\", \"🍌 Pisang\", \"🍊 Jeruk\", \"🍇 Anggur\"]\n\n# Akses elemen (index mulai dari 0)\nprint(buah[0])    # 🍎 Apel\nprint(buah[-1])   # 🍇 Anggur (dari belakang)\n\n# Modifikasi\nbuah.append(\"🍓 Stroberi\")   # Tambah di akhir\nbuah.insert(1, \"🥭 Mangga\")  # Sisip di index 1\nbuah.remove(\"🍌 Pisang\")     # Hapus elemen\n\n# Slicing (memotong list)\nprint(buah[1:3])  # Elemen index 1 sampai 2\n\n# List comprehension (cara keren membuat list!)\nkuadrat = [x**2 for x in range(6)]\nprint(kuadrat)  # [0, 1, 4, 9, 16, 25]",
        explanation: "List adalah struktur data paling sering dipakai. Slicing [start:stop] mengambil elemen dari index start sampai stop-1. List comprehension adalah cara singkat membuat list baru."
      },
      {
        title: "Dictionary - Si Terorganisir",
        code: "# Membuat dictionary\nmahasiswa = {\n    \"nama\": \"Andi\",\n    \"umur\": 20,\n    \"jurusan\": \"Informatika\",\n    \"ipk\": 3.75\n}\n\n# Akses nilai\nprint(mahasiswa[\"nama\"])      # Andi\nprint(mahasiswa.get(\"ipk\"))   # 3.75\nprint(mahasiswa.get(\"email\", \"Tidak ada\"))  # Tidak ada\n\n# Tambah/ubah\nmahasiswa[\"email\"] = \"andi@mail.com\"  # Tambah baru\nmahasiswa[\"ipk\"] = 3.80               # Update\n\n# Loop melalui dictionary\nfor key, value in mahasiswa.items():\n    print(f\"{key}: {value}\")",
        explanation: "Dictionary sangat powerful untuk menyimpan data terstruktur. .items() mengembalikan pasangan key-value. .get() aman karena tidak error jika key tidak ada."
      },
      {
        title: "Set & Tuple",
        code: "# SET - Hilangkan duplikat\nangka = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\nunik = set(angka)\nprint(unik)  # {1, 2, 3, 4}\n\n# Operasi himpunan\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)   # Union: {1,2,3,4,5,6}\nprint(a & b)   # Intersection: {3,4}\nprint(a - b)   # Difference: {1,2}\n\n# TUPLE - Data tetap\nkoordinat = (10, 20)\nwarna_rgb = (255, 128, 0)\nx, y = koordinat  # Tuple unpacking\nprint(f\"x={x}, y={y}\")  # x=10, y=20",
        explanation: "Set otomatis menghilangkan duplikat dan mendukung operasi matematika himpunan. Tuple cocok untuk data yang tidak perlu diubah, seperti koordinat atau warna RGB."
      }
    ],
    flashcards: [
      { question: "Apa perbedaan List dan Tuple?", answer: "List bisa diubah (mutable), Tuple tidak bisa diubah (immutable). List pakai [], Tuple pakai ()." },
      { question: "Bagaimana cara menghilangkan duplikat dari list?", answer: "Konversi ke set: set(my_list), lalu jika perlu list lagi: list(set(my_list))" },
      { question: "Apa index elemen pertama dalam list?", answer: "0! Python menggunakan zero-based indexing. Elemen pertama = list[0]" },
      { question: "Apa perbedaan dict[key] dan dict.get(key)?", answer: "dict[key] error jika key tidak ada. dict.get(key) mengembalikan None (atau nilai default) tanpa error." },
      { question: "Apa itu list comprehension?", answer: "Cara singkat membuat list: [ekspresi for item in iterable]. Contoh: [x*2 for x in range(5)]" }
    ],
    quiz: [
      {
        question: "Apa output dari: [1,2,3][1]?",
        options: ["1", "2", "3", "Error"],
        correctIndex: 1,
        explanation: "Index dimulai dari 0. Jadi index 0=1, index 1=2, index 2=3. [1] mengambil elemen kedua = 2."
      },
      {
        question: "Manakah yang TIDAK BISA jadi key dictionary?",
        options: ["'nama'", "42", "(1, 2)", "[1, 2]"],
        correctIndex: 3,
        explanation: "Key dictionary harus immutable (tidak bisa diubah). List [1,2] adalah mutable, jadi tidak bisa jadi key. Tuple (1,2) bisa karena immutable."
      },
      {
        question: "Apa hasil dari: len(set([1,1,2,2,3,3]))?",
        options: ["6", "3", "1", "Error"],
        correctIndex: 1,
        explanation: "set() menghilangkan duplikat, jadi {1,2,3}. len() menghitung jumlah elemen = 3."
      },
      {
        question: "Apa output: {1,2,3} & {2,3,4}?",
        options: ["{1,2,3,4}", "{2,3}", "{1,4}", "Error"],
        correctIndex: 1,
        explanation: "& adalah intersection (irisan) — elemen yang ada di KEDUA set. Yang sama: 2 dan 3."
      }
    ]
  },
  {
    id: 7,
    title: "String Manipulation",
    icon: "✂️",
    summary: "String adalah teks — dan Python punya banyak cara keren untuk mengolahnya! Dari memotong, menggabungkan, mencari, hingga mengubah format.",
    content: [
      "📝 **Dasar String**\n\nString = urutan karakter (teks). Seperti kalung manik-manik, setiap huruf adalah satu manik.\n\n• Dibuat dengan kutip: 'Hello' atau \"Hello\"\n• Triple quote untuk multiline\n• String itu IMMUTABLE (tidak bisa diubah per karakter)\n• Tapi bisa dibuat string baru dari operasi\n\nAnalogi: String seperti foto — tidak bisa edit satu pixel, tapi bisa buat foto baru yang dimodifikasi.",
      "✂️ **String Methods (Metode String)**\n\nPython punya banyak 'alat' bawaan untuk string:\n\n• .upper() → HURUF BESAR\n• .lower() → huruf kecil\n• .strip() → hapus spasi di ujung\n• .split() → pecah jadi list\n• .join() → gabungkan list jadi string\n• .replace() → ganti teks\n• .find() → cari posisi\n• .startswith() / .endswith() → cek awal/akhir\n• .count() → hitung kemunculan",
      "🔪 **Slicing String**\n\nString bisa 'dipotong' seperti list:\n\n• s[0] → karakter pertama\n• s[-1] → karakter terakhir\n• s[2:5] → dari index 2 sampai 4\n• s[::-1] → balik string!\n• s[::2] → ambil setiap 2 karakter\n\nAnalogi: Seperti memotong roti tawar — kamu tentukan dari mana mulai dan sampai mana potongnya.",
      "🎨 **String Formatting**\n\nTiga cara memformat string:\n\n1. **f-string** (terbaru & terbaik): f'Halo {nama}'\n2. **.format()**: 'Halo {}'.format(nama)\n3. **% operator** (lama): 'Halo %s' % nama\n\nf-string paling direkomendasikan karena mudah dibaca dan cepat!"
    ],
    codeExamples: [
      {
        title: "String Methods dalam Aksi",
        code: "teks = \"  Hello, Python World!  \"\n\n# Membersihkan\nprint(teks.strip())        # \"Hello, Python World!\"\nprint(teks.strip().lower()) # \"hello, python world!\"\nprint(teks.strip().upper()) # \"HELLO, PYTHON WORLD!\"\n\n# Memecah & menggabungkan\nkata = \"Python adalah bahasa yang keren\"\nlist_kata = kata.split()  # Pecah berdasarkan spasi\nprint(list_kata)\n\n# Gabungkan kembali\ngabung = \" - \".join(list_kata)\nprint(gabung)\n\n# Replace & Find\npesan = \"Saya suka Java\"\nprint(pesan.replace(\"Java\", \"Python\"))  # \"Saya suka Python\"\nprint(pesan.find(\"suka\"))  # 5 (posisi index)",
        explanation: "String methods tidak mengubah string asli (karena immutable), tapi mengembalikan string BARU. Chain methods: teks.strip().lower().split()"
      },
      {
        title: "Slicing & f-string",
        code: "nama = \"Python Programming\"\n\n# Slicing\nprint(nama[0:6])    # \"Python\"\nprint(nama[7:])     # \"Programming\"\nprint(nama[::-1])   # \"gnimmargorP nohtyP\" (terbalik!)\nprint(nama[::2])    # \"Pto rgamn\" (setiap 2 huruf)\n\n# f-string - cara terbaik!\nproduk = \"Kopi\"\nharga = 25000\njumlah = 3\ntotal = harga * jumlah\n\nprint(f\"{produk}: Rp {harga:,}\")\nprint(f\"Jumlah: {jumlah} x Rp {harga:,}\")\nprint(f\"Total: Rp {total:,}\")\n\n# Format angka dalam f-string\npi = 3.14159265\nprint(f\"Pi = {pi:.2f}\")  # 3.14 (2 desimal)",
        explanation: "Slicing [start:stop:step] sangat powerful. f-string bisa format angka: :.2f (2 desimal), :, (pemisah ribuan)."
      }
    ],
    flashcards: [
      { question: "Apa hasil 'hello'.upper()?", answer: "'HELLO' — mengubah semua huruf jadi kapital" },
      { question: "Apa itu slicing s[::-1]?", answer: "Membalik string! Step -1 berarti berjalan mundur dari akhir ke awal." },
      { question: "Apa perbedaan .find() dan .index()?", answer: ".find() mengembalikan -1 jika tidak ditemukan. .index() menghasilkan error ValueError jika tidak ditemukan." },
      { question: "Apa hasil 'a,b,c'.split(',')?", answer: "['a', 'b', 'c'] — memecah string berdasarkan delimiter ',' menjadi list" },
      { question: "Apa itu f-string?", answer: "String formatting dengan prefix f: f'text {variable}'. Variabel dalam {} akan diganti nilainya." }
    ],
    quiz: [
      {
        question: "Apa output: 'python'[1:4]?",
        options: ["'pyt'", "'yth'", "'ytho'", "'pyth'"],
        correctIndex: 1,
        explanation: "Slicing [1:4] mengambil index 1 sampai 3. p(0)y(1)t(2)h(3)o(4)n(5) → 'yth'"
      },
      {
        question: "Apa hasil: '-'.join(['a', 'b', 'c'])?",
        options: ["'abc'", "'a-b-c'", "['-', '-', '-']", "Error"],
        correctIndex: 1,
        explanation: ".join() menggabungkan elemen list dengan separator '-'. Hasilnya: 'a-b-c'"
      },
      {
        question: "Apa output: 'Hello World'.count('l')?",
        options: ["1", "2", "3", "0"],
        correctIndex: 2,
        explanation: ".count() menghitung berapa kali karakter muncul. 'l' muncul 3 kali di 'Hello World'."
      }
    ]
  },
  {
    id: 8,
    title: "Error Handling",
    icon: "🛡️",
    summary: "Error handling seperti sabuk pengaman — melindungi program dari crash saat terjadi kesalahan. Dengan try/except, program tetap jalan meski ada masalah!",
    content: [
      "🐛 **Jenis-Jenis Error**\n\n• **SyntaxError** — Salah ketik/kode (seperti typo di surat)\n• **TypeError** — Operasi pada tipe data yang salah (misal: '5' + 3)\n• **ValueError** — Nilai tidak sesuai (misal: int('abc'))\n• **IndexError** — Index di luar jangkauan\n• **KeyError** — Key tidak ada di dictionary\n• **FileNotFoundError** — File tidak ditemukan\n• **ZeroDivisionError** — Membagi dengan nol\n\nAnalogi: Seperti lampu peringatan di mobil — masing-masing menandakan masalah berbeda.",
      "🛡️ **Try/Except — Sabuk Pengaman**\n\nStruktur:\ntry:\n    # Kode yang 'berisiko'\nexcept ErrorType:\n    # Apa yang dilakukan jika error\nelse:\n    # Jika TIDAK ada error\nfinally:\n    # SELALU dijalankan (ada error atau tidak)\n\nAnalogi: Seperti payung — kamu bawa (try) untuk jaga-jaga kalau hujan (except). Kalau tidak hujan, tetap senang (else). Payungnya tetap kamu punya (finally).",
      "🎯 **Raise — Membuat Error Sendiri**\n\nKadang kamu ingin program 'protes' jika kondisi tidak sesuai:\n\nraise ValueError('Umur tidak boleh negatif!')\n\nAnalogi: Seperti satpam yang menghentikan orang masuk kalau tidak pakai baju rapi. Kamu yang tentukan aturannya!",
      "📋 **Best Practices**\n\n1. Tangani error SESPESIFIK mungkin (jangan cuma except:)\n2. Gunakan finally untuk cleanup (tutup file, dll)\n3. Jangan 'menelan' error (except tanpa action)\n4. Buat custom exception untuk kasus khusus\n5. Log error untuk debugging"
    ],
    codeExamples: [
      {
        title: "Try/Except Dasar",
        code: "# Contoh: Pembagian aman\ndef bagi(a, b):\n    try:\n        hasil = a / b\n    except ZeroDivisionError:\n        print(\"❌ Error: Tidak bisa membagi dengan nol!\")\n        return None\n    except TypeError:\n        print(\"❌ Error: Masukkan angka!\")\n        return None\n    else:\n        print(f\"✅ {a} / {b} = {hasil}\")\n        return hasil\n    finally:\n        print(\"--- Operasi selesai ---\")\n\nbagi(10, 3)    # ✅ 10 / 3 = 3.33...\nbagi(10, 0)    # ❌ Error: Tidak bisa membagi dengan nol!",
        explanation: "try menjalankan kode berisiko. except menangkap error spesifik. else dijalankan jika tidak ada error. finally SELALU dijalankan."
      },
      {
        title: "Raise & Custom Exception",
        code: "# Raise - memunculkan error sendiri\ndef set_umur(umur):\n    if umur < 0:\n        raise ValueError(f\"Umur tidak boleh negatif! Diberi: {umur}\")\n    if umur > 150:\n        raise ValueError(f\"Umur tidak realistis! Diberi: {umur}\")\n    return umur\n\n# Custom Exception\nclass PasswordLemahError(Exception):\n    pass\n\ndef buat_password(pwd):\n    if len(pwd) < 8:\n        raise PasswordLemahError(\n            f\"Password terlalu pendek ({len(pwd)} karakter). Minimal 8!\"\n        )\n    return pwd\n\ntry:\n    set_umur(-5)\nexcept ValueError as e:\n    print(f\"Error: {e}\")",
        explanation: "raise digunakan untuk 'melempar' error secara sengaja. Custom exception (class yang inherit Exception) membuat error lebih deskriptif dan spesifik."
      }
    ],
    flashcards: [
      { question: "Apa itu try/except?", answer: "Struktur untuk menangani error. try: jalankan kode berisiko. except: tangani jika error terjadi." },
      { question: "Kapan blok 'else' dijalankan?", answer: "Hanya ketika TIDAK ADA error di blok try. Jika ada error, else di-skip." },
      { question: "Kapan blok 'finally' dijalankan?", answer: "SELALU dijalankan, baik ada error maupun tidak. Berguna untuk cleanup." },
      { question: "Apa fungsi raise?", answer: "Memunculkan/membuat error secara sengaja. Contoh: raise ValueError('pesan error')" },
      { question: "Apa bahaya dari 'except:' tanpa spesifikasi?", answer: "Menangkap SEMUA error termasuk SystemExit dan KeyboardInterrupt. Selalu sebutkan jenis errornya!" }
    ],
    quiz: [
      {
        question: "Error apa yang terjadi saat: 10 / 0?",
        options: ["TypeError", "ValueError", "ZeroDivisionError", "RuntimeError"],
        correctIndex: 2,
        explanation: "Membagi angka dengan nol menghasilkan ZeroDivisionError di Python."
      },
      {
        question: "Blok mana yang SELALU dijalankan?",
        options: ["try", "except", "else", "finally"],
        correctIndex: 3,
        explanation: "finally SELALU dijalankan, baik ada error maupun tidak. Berguna untuk operasi cleanup."
      },
      {
        question: "Apa output dari kode ini?\ntry:\n    x = int('abc')\nexcept ValueError:\n    print('A')\nexcept TypeError:\n    print('B')",
        options: ["A", "B", "AB", "Error"],
        correctIndex: 0,
        explanation: "int('abc') menghasilkan ValueError (bukan TypeError). Except pertama yang cocok dijalankan, lalu keluar."
      }
    ]
  },
  {
    id: 9,
    title: "Object-Oriented Programming",
    icon: "🏗️",
    summary: "OOP adalah cara membuat program dengan meniru dunia nyata — membuat 'objek' yang punya data dan kemampuan sendiri. Seperti membuat karakter game yang punya atribut dan skill!",
    content: [
      "🏗️ **Konsep Dasar OOP**\n\nBayangkan OOP seperti membuat dunia mini:\n• **Class** = Cetak biru (blueprint) — 'Seperti apa karakternya?'\n• **Object** = Hasil cetakan — 'Karakter yang sudah jadi'\n• **Attribute** = Data/ciri — nama, umur, warna\n• **Method** = Kemampuan/aksi — lari(), makan(), tidur()\n\nAnalogi: Class = Resep kue. Object = Kue yang sudah jadi. Kamu bisa buat banyak kue (object) dari satu resep (class).",
      "🧬 **Inheritance (Pewarisan)**\n\nClass anak bisa 'mewarisi' sifat class induk:\n\n• **Parent class** = Class induk (superclass)\n• **Child class** = Class anak (subclass)\n• Anak mendapat semua attribute & method induk\n• Anak bisa tambah fitur baru atau override method induk\n\nAnalogi: Seperti DNA keluarga — anak mewarisi sifat orang tua, tapi bisa punya sifat tambahan sendiri.",
      "🎭 **Encapsulation (Pembungkusan)**\n\nMenyembunyikan detail internal dan hanya expose yang penting:\n\n• **Public** — Bisa diakses dari mana saja: nama\n• **Protected** — Sebaiknya tidak diakses langsung: _nama\n• **Private** — Hanya bisa diakses di dalam class: __nama\n\nAnalogi: Seperti TV — kamu pakai remote (public method) untuk ganti channel. Tidak perlu buka casing dan utak-atik kabel (private)!",
      "🔄 **Polymorphism (Banyak Bentuk)**\n\nMethod yang sama bisa berperilaku berbeda tergantung objeknya:\n\nAnalogi: 'Bersuara()' — kucing: 'Meong!', anjing: 'Guk guk!', burung: 'Cuit cuit!'\nMethod sama (bersuara), tapi hasilnya berbeda tergantung jenis hewannya.",
      "🔮 **Magic Methods (Dunder Methods)**\n\nMethod spesial yang dimulai dan diakhiri __:\n\n• __init__() — Constructor (saat object dibuat)\n• __str__() — Representasi string (saat print)\n• __len__() — Untuk len()\n• __add__() — Untuk operator +\n• __eq__() — Untuk operator =="
    ],
    codeExamples: [
      {
        title: "Membuat Class dan Object",
        code: "class Kucing:\n    # Constructor - dipanggil saat object dibuat\n    def __init__(self, nama, warna, umur):\n        self.nama = nama        # Attribute\n        self.warna = warna\n        self.umur = umur\n        self.energy = 100\n    \n    # Method - kemampuan kucing\n    def makan(self):\n        self.energy += 20\n        return f\"{self.nama} makan 🐟 Energy: {self.energy}\"\n    \n    def tidur(self):\n        self.energy = 100\n        return f\"{self.nama} tidur 💤 Energy penuh!\"\n    \n    def main(self):\n        self.energy -= 30\n        return f\"{self.nama} bermain 🎾 Energy: {self.energy}\"\n    \n    def __str__(self):\n        return f\"🐱 {self.nama} ({self.warna}, {self.umur} tahun)\"\n\n# Membuat object\nkucing1 = Kucing(\"Mimi\", \"Orange\", 2)\nkucing2 = Kucing(\"Luna\", \"Hitam\", 3)\n\nprint(kucing1)           # 🐱 Mimi (Orange, 2 tahun)\nprint(kucing1.makan())   # Mimi makan 🐟 Energy: 120",
        explanation: "self merujuk ke object itu sendiri. __init__ adalah constructor yang dipanggil otomatis saat object dibuat. Method adalah fungsi yang milik class."
      },
      {
        title: "Inheritance & Polymorphism",
        code: "# Parent class\nclass Hewan:\n    def __init__(self, nama):\n        self.nama = nama\n    \n    def bersuara(self):\n        return f\"{self.nama} membuat suara...\"\n\n# Child class - mewarisi Hewan\nclass Anjing(Hewan):\n    def __init__(self, nama, ras):\n        super().__init__(nama)  # Panggil constructor parent\n        self.ras = ras\n    \n    def bersuara(self):  # Override method parent\n        return f\"{self.nama}: Guk guk! 🐕\"\n\nclass Kucing(Hewan):\n    def bersuara(self):  # Override berbeda\n        return f\"{self.nama}: Meong! 🐱\"\n\n# Polymorphism - method sama, hasil berbeda\nhewan_hewan = [Anjing(\"Rex\", \"Husky\"), Kucing(\"Mimi\")]\nfor hewan in hewan_hewan:\n    print(hewan.bersuara())\n# Rex: Guk guk! 🐕\n# Mimi: Meong! 🐱",
        explanation: "super().__init__() memanggil constructor parent. Override = menulis ulang method parent. Polymorphism = method sama (bersuara) tapi hasil berbeda tergantung object."
      }
    ],
    flashcards: [
      { question: "Apa perbedaan Class dan Object?", answer: "Class = blueprint/cetak biru. Object = hasil nyata dari blueprint. Satu class bisa menghasilkan banyak object." },
      { question: "Apa itu __init__?", answer: "Constructor — method spesial yang otomatis dipanggil saat object dibuat. Untuk inisialisasi attribute." },
      { question: "Apa itu self?", answer: "Referensi ke object itu sendiri. Digunakan untuk mengakses attribute dan method dalam class." },
      { question: "Apa itu inheritance?", answer: "Pewarisan — child class mendapat attribute dan method dari parent class. Menggunakan: class Child(Parent):" },
      { question: "Apa itu encapsulation?", answer: "Menyembunyikan detail internal object. Menggunakan _ (protected) atau __ (private) untuk membatasi akses." }
    ],
    quiz: [
      {
        question: "Apa yang dipanggil saat: obj = MyClass('data')?",
        options: ["__str__()", "__init__()", "__new__()", "__call__()"],
        correctIndex: 1,
        explanation: "__init__() adalah constructor yang otomatis dipanggil saat object dibuat untuk menginisialisasi attribute."
      },
      {
        question: "Apa fungsi super()?",
        options: ["Membuat object baru", "Memanggil method parent class", "Menghapus object", "Membuat class baru"],
        correctIndex: 1,
        explanation: "super() digunakan untuk memanggil method dari parent class, biasanya __init__() untuk mewarisi inisialisasi."
      },
      {
        question: "Apa itu polymorphism?",
        options: ["Menyembunyikan data", "Method sama, perilaku berbeda tergantung object", "Mewarisi attribute", "Membuat object baru"],
        correctIndex: 1,
        explanation: "Polymorphism = banyak bentuk. Method yang sama (misal bersuara()) menghasilkan output berbeda tergantung jenis objectnya."
      }
    ]
  },
  {
    id: 10,
    title: "File Handling & Module",
    icon: "📁",
    summary: "File handling = membaca dan menulis file. Module = cara mengorganisir kode dan menggunakan library orang lain. Dua skill penting untuk program yang real-world!",
    content: [
      "📁 **Membaca & Menulis File**\n\nBayangkan file seperti buku:\n• **Read (r)** — Membaca buku\n• **Write (w)** — Menulis buku baru (menimpa!)\n• **Append (a)** — Menambah di halaman terakhir\n• **Read+ (r+)** — Baca dan tulis\n\nMode penting:\n• 'r' — Read (default)\n• 'w' — Write (hapus isi lama!)\n• 'a' — Append (tambah di akhir)\n• 'b' — Binary mode\n\n⚠️ SELALU tutup file setelah dipakai, atau gunakan 'with' statement!",
      "📦 **Module & Import**\n\nModule = file Python yang berisi kode yang bisa dipakai ulang.\n\nCara import:\n• import math — Import seluruh module\n• from math import sqrt — Import fungsi tertentu\n• from math import * — Import semua (tidak disarankan)\n• import numpy as np — Import dengan alias\n\nAnalogi: Module seperti toolbox. Import = mengambil toolbox. from...import = mengambil satu alat spesifik dari toolbox.",
      "📚 **Module Populer**\n\n• **math** — Fungsi matematika\n• **random** — Angka acak\n• **datetime** — Tanggal dan waktu\n• **os** — Interaksi dengan sistem operasi\n• **json** — Baca/tulis data JSON\n• **requests** — HTTP requests (perlu install)\n• **pandas** — Data analysis (perlu install)\n\nAnalogi: Module seperti app di HP — masing-masing punya fungsi khusus. Tinggal 'install' (import) dan pakai!",
      "🏗️ **Membuat Module Sendiri**\n\nFile .py apapun bisa jadi module! Cukup import file lain.\n\nPackage = folder berisi module + file __init__.py\n\nAnalogi: Module = satu buku resep. Package = satu rak buku resep (kumpulan buku)."
    ],
    codeExamples: [
      {
        title: "File Handling dengan 'with'",
        code: "# MENULIS ke file (dengan 'with' - otomatis ditutup!)\nwith open(\"catatan.txt\", \"w\") as file:\n    file.write(\"Hari ini belajar Python! 🐍\\n\")\n    file.write(\"Sangat menyenangkan! 🎉\\n\")\n\n# MEMBACA seluruh isi file\nwith open(\"catatan.txt\", \"r\") as file:\n    isi = file.read()\n    print(isi)\n\n# MEMBACA per baris\nwith open(\"catatan.txt\", \"r\") as file:\n    for baris in file:\n        print(baris.strip())\n\n# APPEND - menambah isi\nwith open(\"catatan.txt\", \"a\") as file:\n    file.write(\"Besok lanjut OOP! 🚀\\n\")",
        explanation: "'with' statement otomatis menutup file setelah blok selesai, meski ada error. Ini BEST PRACTICE untuk file handling di Python."
      },
      {
        title: "Import & Module",
        code: "# Import module bawaan\nimport math\nimport random\nfrom datetime import datetime, timedelta\n\n# math\nprint(math.pi)         # 3.141592653589793\nprint(math.sqrt(144))  # 12.0\nprint(math.ceil(4.2))  # 5 (pembulatan ke atas)\n\n# random\nprint(random.randint(1, 100))    # Angka acak 1-100\nprint(random.choice([\"A\", \"B\", \"C\"]))  # Pilih random\n\n# datetime\nsekarang = datetime.now()\nprint(f\"Sekarang: {sekarang.strftime('%d-%m-%Y %H:%M')}\")\nbesok = sekarang + timedelta(days=1)\nprint(f\"Besok: {besok.strftime('%d-%m-%Y')}\")",
        explanation: "Module bawaan Python sangat banyak! math untuk matematika, random untuk angka acak, datetime untuk waktu. Import hanya yang dibutuhkan."
      },
      {
        title: "JSON Handling",
        code: "import json\n\n# Data Python → JSON string\ndata = {\n    \"nama\": \"Andi\",\n    \"umur\": 25,\n    \"hobi\": [\"coding\", \"gaming\", \"membaca\"],\n    \"aktif\": True\n}\n\n# Serialize (Python → JSON)\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n\n# Simpan ke file\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\n# Baca dari file\nwith open(\"data.json\", \"r\") as f:\n    data_baca = json.load(f)\n    print(data_baca[\"nama\"])  # Andi",
        explanation: "JSON adalah format pertukaran data universal. dumps() = dict to string. loads() = string to dict. dump() = tulis ke file. load() = baca dari file."
      }
    ],
    flashcards: [
      { question: "Apa perbedaan mode 'w' dan 'a'?", answer: "'w' (write) menimpa seluruh isi file. 'a' (append) menambah di akhir file tanpa menghapus isi lama." },
      { question: "Kenapa pakai 'with' untuk buka file?", answer: "File otomatis ditutup setelah blok selesai, meski ada error. Lebih aman dan bersih." },
      { question: "Apa perbedaan import math dan from math import sqrt?", answer: "import math → akses via math.sqrt(). from math import sqrt → langsung pakai sqrt(). Yang kedua lebih singkat." },
      { question: "Apa itu JSON?", answer: "JavaScript Object Notation — format data berbasis teks yang mudah dibaca manusia dan mesin. Seperti dictionary Python dalam bentuk teks." },
      { question: "Apa fungsi json.dumps() vs json.dump()?", answer: "dumps() = dict → JSON string. dump() = dict → langsung tulis ke file. 's' di dumps = string." }
    ],
    quiz: [
      {
        question: "Mode file mana yang MENIMPA isi file?",
        options: ["'r'", "'w'", "'a'", "'x'"],
        correctIndex: 1,
        explanation: "Mode 'w' (write) menghapus seluruh isi file lama dan menulis dari awal. Hati-hati!"
      },
      {
        question: "Apa output: random.randint(1, 5)?",
        options: ["Selalu 3", "Angka acak 1-5 (inklusif)", "Angka acak 1-4", "Error"],
        correctIndex: 1,
        explanation: "randint(a, b) menghasilkan angka acak dari a sampai b, INKLUSIF (b termasuk). Jadi bisa 1, 2, 3, 4, atau 5."
      },
      {
        question: "Manakah yang mengubah dict Python jadi JSON string?",
        options: ["json.load()", "json.loads()", "json.dump()", "json.dumps()"],
        correctIndex: 3,
        explanation: "dumps() = dictionary to string (JSON). 's' = string. dump() = ke file. loads() = string ke dict. load() = file ke dict."
      }
    ]
  },
  {
    id: 11,
    title: "Topik Lanjutan",
    icon: "🚀",
    summary: "Topik lanjutan Python: Decorator, Generator, List Comprehension lanjutan, Context Manager, dan teknik-teknik yang membuat kodemu lebih Pythonic!",
    content: [
      "🎁 **Decorator**\n\nDecorator = 'pembungkus' fungsi yang menambah kemampuan tanpa mengubah fungsi asli.\n\nAnalogi: Seperti membungkus kado — kadonya (fungsi) tetap sama, tapi ada pita dan kertas cantik (decorator) yang menambah nilai.\n\nDecorator sering dipakai untuk: logging, timing, authentication, caching.",
      "⚡ **Generator**\n\nGenerator = fungsi yang bisa 'pause' dan 'resume'. Menghasilkan nilai satu per satu, bukan sekaligus.\n\nAnalogi: Seperti dispenser air — mengeluarkan air satu gelas per satu. Bukan langsung menuang semua sekaligus ke lantai!\n\n• yield menggantikan return\n• Hemat memori untuk data besar\n• Lazy evaluation — hitung saat dibutuhkan",
      "✨ **Comprehension Lanjutan**\n\nCara singkat membuat collection:\n\n• **List**: [x for x in range(10) if x%2==0]\n• **Dict**: {k: v for k, v in pairs}\n• **Set**: {x for x in data if x > 0}\n\nBisa nested: [[j for j in range(3)] for i in range(3)]\n\nAnalogi: Comprehension seperti mesin pabrik — bahan masuk, langsung jadi produk dalam satu baris!",
      "🔗 **Context Manager**\n\nMengelola resource (file, koneksi, lock) dengan aman:\n\nwith open('file.txt') as f:\n    data = f.read()\n# File otomatis ditutup di sini\n\nAnalogi: Seperti pintu otomatis — buka saat masuk (__enter__), tutup saat keluar (__exit__). Tidak perlu ingat untuk menutup!",
      "🐍 **Pythonic Tips**\n\n1. **Enumerate**: for i, val in enumerate(list) — dapat index + value\n2. **Zip**: for a, b in zip(list1, list2) — gabungkan 2 list\n3. **Walrus operator**: if (n := len(data)) > 10: — assign dalam ekspresi\n4. **Unpacking**: a, *b, c = [1,2,3,4,5] → a=1, b=[2,3,4], c=5\n5. **Ternary**: x = 'genap' if n%2==0 else 'ganjil'"
    ],
    codeExamples: [
      {
        title: "Decorator",
        code: "import time\nfrom functools import wraps\n\n# Decorator untuk mengukur waktu\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f\"⏱️ {func.__name__} selesai dalam {end-start:.4f} detik\")\n        return result\n    return wrapper\n\n# Pakai decorator dengan @\n@timer\ndef hitung_faktorial(n):\n    if n <= 1:\n        return 1\n    return n * hitung_faktorial(n - 1)\n\nhasil = hitung_faktorial(10)\nprint(f\"10! = {hasil}\")",
        explanation: "Decorator menambah 'layer' pada fungsi. @timer membungkus hitung_faktorial dengan kemampuan timing tanpa mengubah kode aslinya."
      },
      {
        title: "Generator & Comprehension Lanjutan",
        code: "# Generator - hemat memori!\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\n# Pakai generator\nfor num in fibonacci(10):\n    print(num, end=\" \")  # 0 1 1 2 3 5 8 13 21 34\n\n# Nested comprehension - matriks\nmatriks = [[i*j for j in range(1, 4)] for i in range(1, 4)]\nprint(matriks)  # [[1,2,3],[2,4,6],[3,6,9]]\n\n# Flatten nested list\nnested = [[1,2], [3,4], [5,6]]\nflat = [x for sublist in nested for x in sublist]\nprint(flat)  # [1, 2, 3, 4, 5, 6]",
        explanation: "Generator menggunakan yield dan menghasilkan nilai satu per satu (lazy evaluation). Nested comprehension untuk struktur data multi-dimensi."
      },
      {
        title: "Pythonic Patterns",
        code: "# Enumerate - dapat index + value\nbuah = [\"Apel\", \"Pisang\", \"Jeruk\"]\nfor i, b in enumerate(buah, start=1):\n    print(f\"{i}. {b}\")\n\n# Zip - gabungkan beberapa list\nnama = [\"Andi\", \"Budi\", \"Cici\"]\nnilai = [85, 92, 78]\nfor n, v in zip(nama, nilai):\n    print(f\"{n}: {v}\")\n\n# Unpacking lanjutan\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(first)   # 1\nprint(middle)  # [2, 3, 4]\nprint(last)    # 5",
        explanation: "Pattern-pattern ini membuat kode lebih 'Pythonic' — bersih, mudah dibaca, dan efisien. Enumerate untuk index, zip untuk paralel, unpacking untuk assign elegan."
      }
    ],
    flashcards: [
      { question: "Apa itu decorator?", answer: "Fungsi yang membungkus fungsi lain untuk menambah kemampuan tanpa mengubah kode asli. Ditulis dengan @nama_decorator." },
      { question: "Apa perbedaan return dan yield?", answer: "return = fungsi selesai, kembalikan nilai. yield = fungsi pause, kembalikan nilai, bisa dilanjut nanti (generator)." },
      { question: "Apa keuntungan generator?", answer: "Hemat memori! Menghasilkan nilai satu per satu (lazy evaluation), tidak menyimpan semua di memori sekaligus." },
      { question: "Apa itu enumerate()?", answer: "Fungsi yang menghasilkan pasangan (index, value) saat loop. enumerate(list, start=1) mulai index dari 1." },
      { question: "Apa itu walrus operator (:=)?", answer: "Operator assign dalam ekspresi. if (n := len(data)) > 5: — assign DAN cek kondisi dalam satu baris." }
    ],
    quiz: [
      {
        question: "Apa output dari generator ini?\ndef gen():\n    yield 1\n    yield 2\n    yield 3\nlist(gen())",
        options: ["[1, 2, 3]", "(1, 2, 3)", "Error", "None"],
        correctIndex: 0,
        explanation: "Generator menghasilkan 1, 2, 3 secara berurutan. list() mengumpulkan semua hasil jadi list [1, 2, 3]."
      },
      {
        question: "Apa fungsi @decorator?",
        options: ["Menghapus fungsi", "Membungkus fungsi dengan fungsi lain", "Menggandakan fungsi", "Mengubah nama fungsi"],
        correctIndex: 1,
        explanation: "@decorator membungkus (wrap) fungsi dengan fungsi decorator, menambah kemampuan tanpa mengubah kode asli."
      },
      {
        question: "Apa hasil: [x**2 for x in range(5) if x%2==0]?",
        options: ["[0, 4, 16]", "[1, 9]", "[0, 1, 4, 9, 16]", "[4, 16]"],
        correctIndex: 0,
        explanation: "Range(5) = 0,1,2,3,4. Filter genap: 0,2,4. Kuadratkan: 0,4,16. Hasil: [0, 4, 16]."
      },
      {
        question: "Apa output enumerate(['a','b','c'], start=1)?",
        options: ["[(0,'a'),(1,'b'),(2,'c')]", "[(1,'a'),(2,'b'),(3,'c')]", "[('a',1),('b',2),('c',3)]", "Error"],
        correctIndex: 1,
        explanation: "enumerate dengan start=1 memulai index dari 1. Hasil: (1,'a'), (2,'b'), (3,'c')."
      }
    ]
  },
  {
    id: 12,
    title: "Proyek & Best Practices",
    icon: "🎯",
    summary: "Saatnya menggabungkan semua yang sudah dipelajari! Belajar best practices, tips debugging, dan cara membangun proyek Python yang real-world.",
    content: [
      "📐 **Best Practices Python**\n\n1. **PEP 8** — Style guide resmi Python\n   • Indentasi 4 spasi (bukan tab)\n   • Nama variabel: snake_case\n   • Nama class: CamelCase\n   • Maksimal 79 karakter per baris\n   • Import di atas file\n\n2. **Type Hints** (Python 3.5+)\n   def sapa(nama: str, umur: int) -> str:\n       return f'Halo {nama}, umur {umur}'\n\n3. **Docstrings** — Dokumentasi dalam kode",
      "🐛 **Debugging Tips**\n\n1. **print() debugging** — Cara klasik tapi efektif\n2. **Debugger (pdb)** — Step through code\n3. **Logging** — Lebih baik dari print untuk production\n   import logging\n   logging.info('Info message')\n   logging.error('Error message')\n4. **Try/except** — Handle error dengan baik\n5. **Unit testing** — Pastikan kode bekerja",
      "🏗️ **Struktur Proyek**\n\nmy_project/\n├── main.py          # Entry point\n├── requirements.txt # Daftar dependencies\n├── README.md        # Dokumentasi\n├── src/\n│   ├── __init__.py\n│   ├── models.py    # Class/data models\n│   ├── utils.py     # Helper functions\n│   └── config.py    # Konfigurasi\n├── tests/\n│   └── test_main.py # Unit tests\n└── .gitignore       # File yang diabaikan git\n\nAnalogi: Seperti membangun rumah — ada fondasi (struktur), ruangan (module), dan buku panduan (README).",
      "🌐 **Virtual Environment & Package Manager**\n\n• **venv** — Environment terisolasi per proyek\n  python -m venv myenv\n  source myenv/bin/activate  # Linux/Mac\n\n• **pip** — Package manager\n  pip install requests\n  pip freeze > requirements.txt\n  pip install -r requirements.txt\n\nAnalogi: Virtual environment seperti kamar terpisah — setiap proyek punya 'kamar' sendiri dengan perabotan (library) yang tidak saling mengganggu.",
      "🚀 **Roadmap Belajar Selanjutnya**\n\nSetelah menguasai dasar Python, pilih spesialisasi:\n\n• **Web Development** → Django / Flask / FastAPI\n• **Data Science** → Pandas, NumPy, Matplotlib\n• **Machine Learning** → Scikit-learn, TensorFlow, PyTorch\n• **Automation** → Selenium, BeautifulSoup\n• **Game Dev** → Pygame\n• **Desktop App** → Tkinter, PyQt\n• **IoT** → MicroPython, Raspberry Pi"
    ],
    codeExamples: [
      {
        title: "Type Hints & Docstrings",
        code: "from typing import List, Dict, Optional\n\ndef hitung_rata_rata(nilai: List[float]) -> float:\n    \"\"\"\n    Menghitung rata-rata dari daftar nilai.\n    \n    Args:\n        nilai: List berisi nilai-nilai (float)\n    \n    Returns:\n        float: Nilai rata-rata\n    \n    Raises:\n        ValueError: Jika list kosong\n    \"\"\"\n    if not nilai:\n        raise ValueError(\"List tidak boleh kosong!\")\n    return sum(nilai) / len(nilai)\n\ndef cari_siswa(\n    data: Dict[str, int],\n    nama: str\n) -> Optional[int]:\n    \"\"\"Cari nilai siswa berdasarkan nama.\"\"\"\n    return data.get(nama)\n\n# Type hints membantu IDE dan mencegah bug\nnilai_kelas: List[float] = [85.5, 92.0, 78.5]\nrata = hitung_rata_rata(nilai_kelas)\nprint(f\"Rata-rata: {rata:.1f}\")",
        explanation: "Type hints tidak mengubah runtime, tapi membantu IDE (autocomplete, error detection) dan membuat kode lebih jelas. Docstrings membantu dokumentasi otomatis."
      },
      {
        title: "Logging & Unit Testing",
        code: "import logging\nimport unittest\n\n# Setup logging\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s - %(levelname)s - %(message)s'\n)\nlogger = logging.getLogger(__name__)\n\n# Fungsi yang akan di-test\ndef kalkulator(a: float, b: float, operasi: str) -> float:\n    logger.info(f\"Kalkulator: {a} {operasi} {b}\")\n    \n    if operasi == \"+\":\n        return a + b\n    elif operasi == \"/\":\n        if b == 0:\n            raise ValueError(\"Tidak bisa membagi dengan nol\")\n        return a / b\n    else:\n        raise ValueError(f\"Operasi tidak dikenal: {operasi}\")\n\n# Unit Test\nclass TestKalkulator(unittest.TestCase):\n    def test_tambah(self):\n        self.assertEqual(kalkulator(2, 3, \"+\"), 5)\n    \n    def test_bagi_nol(self):\n        with self.assertRaises(ValueError):\n            kalkulator(10, 0, \"/\")",
        explanation: "Logging lebih baik dari print untuk aplikasi nyata — bisa set level, output ke file, format konsisten. Unit test memastikan kode bekerja benar."
      },
      {
        title: "Contoh Proyek Mini: Todo App CLI",
        code: "import json\nimport os\nfrom datetime import datetime\n\nclass TodoApp:\n    def __init__(self, filename=\"todos.json\"):\n        self.filename = filename\n        self.todos = self.load()\n    \n    def load(self) -> list:\n        if os.path.exists(self.filename):\n            with open(self.filename, \"r\") as f:\n                return json.load(f)\n        return []\n    \n    def save(self):\n        with open(self.filename, \"w\") as f:\n            json.dump(self.todos, f, indent=2)\n    \n    def add(self, task: str):\n        todo = {\n            \"id\": len(self.todos) + 1,\n            \"task\": task,\n            \"done\": False,\n            \"created\": datetime.now().isoformat()\n        }\n        self.todos.append(todo)\n        self.save()\n        print(f\"✅ Ditambahkan: {task}\")\n    \n    def show(self):\n        print(\"\\n📋 DAFTAR TODO:\")\n        for t in self.todos:\n            status = \"✅\" if t[\"done\"] else \"⬜\"\n            print(f\"{status} [{t['id']}] {t['task']}\")",
        explanation: "Ini contoh proyek mini yang menggabungkan: Class (OOP), File handling (JSON), Error handling, Type hints, dan best practices."
      }
    ],
    flashcards: [
      { question: "Apa itu PEP 8?", answer: "Style guide resmi Python — aturan penulisan kode agar konsisten dan mudah dibaca. Contoh: snake_case untuk variabel, 4 spasi indent." },
      { question: "Apa itu virtual environment?", answer: "Environment terisolasi per proyek. Setiap proyek punya library sendiri tanpa konflik. Dibuat dengan: python -m venv myenv" },
      { question: "Apa fungsi type hints?", answer: "Menambahkan informasi tipe data pada parameter dan return. Tidak mengubah runtime, tapi membantu IDE dan dokumentasi." },
      { question: "Apa itu pip?", answer: "Package installer untuk Python. pip install nama_package untuk install library. pip freeze > requirements.txt untuk menyimpan daftar dependencies." },
      { question: "Apa itu unit testing?", answer: "Test otomatis untuk memastikan setiap bagian kode bekerja benar. Menggunakan module unittest atau pytest." }
    ],
    quiz: [
      {
        question: "Menurut PEP 8, nama variabel yang benar adalah?",
        options: ["myVariable", "my_variable", "MyVariable", "MY-VARIABLE"],
        correctIndex: 1,
        explanation: "PEP 8 merekomendasikan snake_case untuk variabel dan fungsi: my_variable. CamelCase untuk class: MyVariable."
      },
      {
        question: "Apa perintah membuat virtual environment?",
        options: ["python -m venv myenv", "pip install venv", "python --venv", "virtualenv --create"],
        correctIndex: 0,
        explanation: "python -m venv myenv membuat virtual environment bernama 'myenv'."
      },
      {
        question: "Apa keuntungan menggunakan logging dibanding print?",
        options: ["Lebih cepat", "Bisa set level, output ke file, format konsisten", "Lebih mudah ditulis", "Tidak ada keuntungan"],
        correctIndex: 1,
        explanation: "Logging bisa set level (DEBUG, INFO, WARNING, ERROR), output ke file, format konsisten, dan bisa dimatikan di production."
      }
    ]
  }
];
