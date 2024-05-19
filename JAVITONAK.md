### Csá! :D
### Írtam egy kis segítséget, hogy a javítást gyorsítsam nektek.
### FONTOS! Nem csak annyi van megvalósítva egyes elemekből, mint amennyit itt felsorolok. Ha valamelyik pontnál nem találod
### helyesneka megoldásom, nézz tovább a kódomban, többször vannak megvalósítva, mint amennyiszer a minimum követelmény kéri!
### Például: struktúrális direktívákból bőven többet találsz a kódómban, mint az itt felsorolt kettő!


### Fordítási hiba - nincsen
### Futtatási hiba - nincsen
### A projekt hostolva van, így éred el: https://wedding-venues-f6f2d.web.app

### Adatmodell (4) - Típus: interface-ek, Hely: shared/models
    1. Booking.ts - a fogalásokat tároló objektum
    2. Comment.ts - az értékeléseket tároló objektum
    3. Picture.ts - a helyszíneket tároló objektum
    4. User.ts    - a felhasználókat tároló obejktum
    Megjegyzés: mindegyi a firestore adatbázisában meg lett valósítva, onnan vannak használva.

### Megfeleleő számú komponensek
    - Sehol sem haladja meg (közel sem) a 250 sort, de nézd meg nyugodtan.

### Reszponzivitás
    - Böngésző: firefox-on nekem szépen kezeli, reszponzív.
    - Mobil: nem volt rossz, de ez megítélés kérdése. Nekem tetszett, de lehet, hogy csak haza beszélek :D

### Attribútum direktívák (2)
    - ngClass -> rating_component.html (4. sor)
    - ngStyle -> viewer_component.html (34. sor)

### Struktúrális direktívák (2)
    - ngModel -> list_component.html (8. sor)
    - ngFor -> viewer_component.html (33. sor)

### Input & Output (1-1)
    - Input: list_component.ts (13. sor)
    - Output: list_component.ts (14. sor)

### Angular Material (10)
    1. MatFormFieldModule
    2. MatButtonModule
    3. MatInputModule
    4. MatIconModule
    5. MatListModule
    6. MatToolbarModule
    7. MatProgressSpinnerModule
    8. MatSelectModule
    9. MatOptionModule
    10. MatCardModule

### Angular formok (2)
    - login_component.html
    - registration_component.html

### Saját pipe osztály (1)
    - Hely: shared/pipes/date-format.pipe.ts
    - Megjegyzés: a videóban látott dátumformázást tölti be, de teljesen más formátumot hozok ki belőle, egyedit.

### Lifecycle hook (2)
    - ngOnInit: viewer_component.ts (51)
    - ngOnChanges: viewer_component.ts (39)

### CRUD - shared/services mappában vannak kiszervezve, onnan vannak meghívva

### Service-ek: Hely: shared/services
    - Például: comment_service.ts (create, read, update, delete, stb.)
    - Megjegyzés: mindegyik adatmodellnek van saját service fájlja, azokat injektálom.

### Firestore adatbázis:
    - Használata például itt is: pages/sites.services.ts
    - A környezeti változók helyesek.

### 2 komplex lekérdezés
    - comment.service.ts (33. sor) -> Használva itt: viewer.component.ts (45. sor)
    - comment.service.ts (37. sor) -> Használva itt: ratings.component.ts (17. sor)

### Routing (4)
    - Hely: app-routing.module.ts (bőven van több ott)

### AuthGuard - 2 oldal levédése
    - Hely: shared/services/auth.guard.ts
    - 2 levédett oldal: + Fogalalások (menüben)
                        + Értékelések (menüben)
    - Magyarázat: értelemszerűen foglalni csak bejelentkezett felhasználónak enegdem, ahogyan az értékelések is exkluzív nálam,
      mivel ezzel is a regisztrációra akarom őket sarkallni.

### Szubjektív pontozás
    - Remélem tetszett! :D