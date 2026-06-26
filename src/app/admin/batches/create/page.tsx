"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Group = {
  id: string;
  group_name: string;
  group_code: string;
};

type Country = {
  id: string;
  country_name: string;
  country_code: string;
};

type PurchaseType = {
  id: string;
  purchase_name: string;
  purchase_code: string;
};

export default function CreateBatchPage() {
  const [groups, setGroups] =
    useState<Group[]>([]);

  const [countries, setCountries] =
    useState<Country[]>([]);

  const [purchaseTypes, setPurchaseTypes] =
    useState<PurchaseType[]>([]);

  const [groupId, setGroupId] =
    useState("");

  const [countryId, setCountryId] =
    useState("");

  const [
    purchaseTypeId,
    setPurchaseTypeId,
  ] = useState("");

  const [batchName, setBatchName] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: groupsData } =
      await supabase
        .from("groups")
        .select("*")
        .order("group_name");

    const { data: countriesData } =
      await supabase
        .from("countries")
        .select("*")
        .order("country_name");

    const {
      data: purchaseTypesData,
    } = await supabase
      .from("purchase_types")
      .select("*")
      .order("purchase_name");

    setGroups(groupsData || []);
    setCountries(countriesData || []);
    setPurchaseTypes(
      purchaseTypesData || []
    );
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("User not found");
      return;
    }

    const { error } =
      await supabase
        .from("batches")
        .insert({
          group_id: groupId,
          country_id: countryId,
          purchase_type_id:
            purchaseTypeId,

          batch_name: batchName,
          notes: notes,

          created_by: user.id,
        });

    setLoading(false);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    window.location.href =
      "/admin/batches";
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#f7f3ef]
        p-8
      "
    >
      <div
        className="
          mx-auto
          max-w-3xl
        "
      >
        <div className="mb-8">
          <p
            className="
              text-sm
              text-[#6b5e5e]/60
            "
          >
            Batch Management
          </p>

          <h1
            className="
              text-4xl
              font-semibold
              text-[#6b5e5e]
            "
          >
            Create Batch 📦
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            rounded-[32px]
            bg-white
            p-8
            shadow-lg
            space-y-5
          "
        >
          {/* Group */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                text-[#6b5e5e]
              "
            >
              Group
            </label>

            <select
              value={groupId}
              onChange={(e) =>
                setGroupId(
                  e.target.value
                )
              }
              required
              className="
                w-full
                rounded-2xl
                border
                border-[#e8b4b8]/40
                p-3
              "
            >
              <option value="">
                Select Group
              </option>

              {groups.map((group) => (
                <option
                  key={group.id}
                  value={group.id}
                >
                  {group.group_name}
                </option>
              ))}
            </select>
          </div>

          {/* Country */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                text-[#6b5e5e]
              "
            >
              Country
            </label>

            <select
              value={countryId}
              onChange={(e) =>
                setCountryId(
                  e.target.value
                )
              }
              required
              className="
                w-full
                rounded-2xl
                border
                border-[#e8b4b8]/40
                p-3
              "
            >
              <option value="">
                Select Country
              </option>

              {countries.map(
                (country) => (
                  <option
                    key={country.id}
                    value={
                      country.id
                    }
                  >
                    {
                      country.country_name
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* Purchase Type */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                text-[#6b5e5e]
              "
            >
              Purchase Type
            </label>

            <select
              value={
                purchaseTypeId
              }
              onChange={(e) =>
                setPurchaseTypeId(
                  e.target.value
                )
              }
              required
              className="
                w-full
                rounded-2xl
                border
                border-[#e8b4b8]/40
                p-3
              "
            >
              <option value="">
                Select Purchase Type
              </option>

              {purchaseTypes.map(
                (type) => (
                  <option
                    key={type.id}
                    value={
                      type.id
                    }
                  >
                    {
                      type.purchase_name
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* Batch Name */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                text-[#6b5e5e]
              "
            >
              Batch Name
            </label>

            <input
              type="text"
              required
              value={batchName}
              onChange={(e) =>
                setBatchName(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#e8b4b8]/40
                p-3
              "
            />
          </div>

          {/* Notes */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                text-[#6b5e5e]
              "
            >
              Notes
            </label>

            <textarea
              rows={4}
              value={notes}
              onChange={(e) =>
                setNotes(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#e8b4b8]/40
                p-3
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-[#e8b4b8]
              py-4
              font-medium
              text-[#6b5e5e]
              shadow-lg
            "
          >
            {loading
              ? "Creating..."
              : "Create Batch"}
          </button>
        </form>
      </div>
    </main>
  );
}