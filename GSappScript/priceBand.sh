=IF(
  IF(
    RIGHT(H2:H, 1) = "g",
    VALUE(LEFT(H2:H, LEN(H2:H) - 1)),
    IF(
      RIGHT(H2:H, 2) = "ml",
      VALUE(LEFT(H2:H, LEN(H2:H) - 2)),
      0
    )
  ) > 2000,
  "2Kg+ Fedex",
  IF((H2:H <= 100) * (I2:I <= 240) * (J2:J <= 165) * (K2:K <= 5), "Small Letter 0-100g",
    IF((H2:H <= 100) * (I2:I <= 250) * (J2:J <= 353) * (K2:K <= 25), "Large Letter 0-100g",
      IF((H2:H <= 250) * (I2:I <= 250) * (J2:J <= 353) * (K2:K <= 25), "Large Letter 101-250g",
        IF((H2:H <= 500) * (I2:I <= 250) * (J2:J <= 353) * (K2:K <= 25), "Large Letter 251-500g",
          IF((H2:H <= 750) * (I2:I <= 250) * (J2:J <= 353) * (K2:K <= 25), "Large Letter 501-750g",
            IF((H2:H <= 1000) * (I2:I <= 350) * (J2:J <= 450) * (K2:K <= 160), "Small Parcel 750g-1kg",
              IF((H2:H <= 1250) * (I2:I <= 350) * (J2:J <= 450) * (K2:K <= 160), "Small Parcel 1.01-1.25kg",
                IF((H2:H <= 1500) * (I2:I <= 350) * (J2:J <= 450) * (K2:K <= 160), "Small Parcel 1.26-1.5kg",
                  IF((H2:H <= 1750) * (I2:I <= 350) * (J2:J <= 450) * (K2:K <= 160), "Small Parcel 1.51-1.75kg",
                    IF((H2:H <= 2000) * (I2:I <= 350) * (J2:J <= 450) * (K2:K <= 160), "Small Parcel 1.76-2kg",
                      IF((H2:H <= 2000) * (I2:I <= 460) * (J2:J <= 610) * (K2:K <= 460), "Medium Parcel 1.76-2kg",
                        "Invalid dimensions or weight"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)