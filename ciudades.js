
            
            var space = " ";

            // let bcn = prompt("Escribe Barcelona");
            // let mdr = prompt("Escribe Madrid");
            // let vln = prompt("Escribe Valencia");
            // let mal = prompt("Escribe Malaga");
            // let cdz = prompt("Escribe Cadiz");
            // let stnd = prompt("Escribe Santander");

           let bcn = "Barcelona";
            let mdr = "Madrid";
            let vln = "Valencia";
            let mal = "Malaga";
            let cdz = "Cadiz";
            let stnd = "Santander";

           console.log(space);
           console.log("Primera ciudad " + bcn);
           console.log("Segunda ciudad " + mdr);
           console.log("Tercera ciudad " + vln);
           console.log("Cuarta ciudad " + mal);
           console.log("Quinta ciudad " + cdz);
           console.log("Sexta ciudad " + stnd);

            
            let cities = new Array(bcn,mdr,vln,mal,cdz,stnd);

            console.log(space);
           
            console.log("Mostrar las ciudades en order alfabetico.");
            
            cities.sort();

            for (city of cities)
            {
                console.log(city);
            }


            console.log(space);
           let ArrayCiudadesModificadas = new Array();

                for (var i = 0; i<cities.length;i++)
                {
                    ArrayCiudadesModificadas[i] = cities[i];
   
               
                    if (ArrayCiudadesModificadas[i].includes("a"))
                    {
                   console.log(ArrayCiudadesModificadas[i].replace(/a/g, '4'));
                    }


                }

 
           let bcnArray = new Array(bcn.length);
           let mdrArray = new Array(mdr.length);
           let vlnArray = new Array(vln.length);
           let malArray = new Array(mal.length);
           let cdzArray = new Array(cdz.length);
           let stndArray = new Array(stnd.length);


                console.log("");
                for (var i = bcn.length -1; i >= 0; i--)
                    {

                       bcnArray[i] = bcn[i];
                        console.log(bcnArray[i]);

                    }


                console.log("");
                for (var i = mdr.length - 1; i >= 0; i--)
                {

                   mdrArray[i] = mdr[i];
                    console.log(mdrArray[i]);

                }


                console.log("");
                for (var i =vln.length - 1; i >= 0; i--)
                {

                    vlnArray[i] = vln[i];
                    console.log(vlnArray[i]);

                }


                console.log("");
                for (var i = mal.length - 1; i >= 0; i--)
                {

                   malArray[i] = mal[i];
                    console.log(malArray[i]);

                }


                console.log("");
                for (var i = cdz.length - 1; i >= 0; i--)
                {

                   cdzArray[i] = cdz[i];
                    console.log(cdzArray[i]);

                }


                console.log("");
                for (var i = stnd.length - 1; i >= 0; i--)
                {

                   stndArray[i] = stnd[i];
                    console.log(stndArray[i]);

                }




    
   
